import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './taskStatus';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository) private taskRepository: TaskRepository
  ) {}

  public async getTaskById(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne(id);
    if (!task) {
      throw new NotFoundException(`Could not find task with id ${id}`);
    }

    return task;
  }

  public async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }

  public getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.taskRepository.getTasks(filterDto);
  }

  public async deleteTaskById(id: number): Promise<void> {
    if (!(await this.taskRepository.deleteTaskById(id))) {
      throw new BadRequestException('Could not delete');
    }
  }

  public async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
    const taskToUpdate = await this.getTaskById(id);
    taskToUpdate.status = status;
    return await taskToUpdate.save();
  }
}
