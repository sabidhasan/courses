import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './taskStatus';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository) private taskRepository: TaskRepository
  ) {}

  public async getTaskById(id: number, user: User): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id, userId: user.id } });
    if (!task) {
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
      throw new BadRequestException('Could not delete');
    }
  }

  public async updateTaskStatus(id: number, status: TaskStatus, user: User): Promise<Task> {
    const taskToUpdate = await this.getTaskById(id, user);
    taskToUpdate.status = status;
    return await taskToUpdate.save();
  }
}
