import { User } from "src/auth/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { Task } from "./task.entity";
import { TaskStatus } from "./taskStatus";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  public async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = new Task();
    task.title = title;
    task.description = description;
    task.status = TaskStatus.OPEN;
    task.user = user;
    await task.save();
    delete task.user;
    return task;
  }

  public async deleteTaskById(id: number, user: User): Promise<boolean> {
    const result = await this.delete({ id, userId: user.id});
    if (result.affected) {
      return true;
    }

    return false;
  }

  public async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
    const { search, status } = filterDto;
    const userId = user.id;

    return await this.createQueryBuilder('task')
      .andWhere(status ? `task.status = :status` : 'TRUE', { status })
      .andWhere(search ? `task.title LIKE :search OR task.description LIKE :search` : '1 = 1', { search: `%${search}%` })
      .andWhere(`task.userId = :userId`, { userId })
      .getMany();
  }
}