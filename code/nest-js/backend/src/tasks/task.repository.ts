import { stat } from "fs";
import { EntityRepository, Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { Task } from "./task.entity";
import { TaskStatus } from "./taskStatus";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  public async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = new Task();
    task.title = title;
    task.description = description;
    task.status = TaskStatus.OPEN;
    return await task.save();
  }

  public async deleteTaskById(id: number): Promise<boolean> {
    const result = await this.delete(id);
    if (result.affected) {
      return true;
    }

    return false;
  }

  public async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    const { search, status } = filterDto;

    return await this.createQueryBuilder('task')
      .andWhere(status ? `task.status = :status` : 'TRUE', { status })
      .andWhere(search ? `task.title LIKE :search OR task.description LIKE :search` : '1 = 1', { search: `%${search}%` })
      .getMany();

    // console.log(q)
      // .andWhere
  }
}