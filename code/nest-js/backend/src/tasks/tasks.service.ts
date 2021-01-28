import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './taskStatus';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TasksService {
  private logger = new Logger('TasksService');

  constructor(
    @InjectRepository(TaskRepository) private taskRepository: TaskRepository
  ) {}

  public async getTaskById(id: number, user: User): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id, userId: user.id } });
    if (!task) {
      this.logger.error(`Could not find task ${id} for user ${user.username}`);
      throw new NotFoundException(`Could not find task with id ${id}`);
    }

    return task;
  }

  public async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto, user);
  }

  public getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
    return this.taskRepository.getTasks(filterDto, user);
  }

  public async deleteTaskById(id: number, user: User): Promise<void> {
    if (!(await this.taskRepository.deleteTaskById(id, user))) {
      this.logger.error(`Could not delete task ${id} for user ${user.username}`);
      throw new BadRequestException('Could not delete');
    }
  }

  public async updateTaskStatus(id: number, status: TaskStatus, user: User): Promise<Task> {
    const taskToUpdate = await this.getTaskById(id, user);
    taskToUpdate.status = status;
    return await taskToUpdate.save();
  }
}
