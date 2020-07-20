import * as uuid from 'uuid';
import { Injectable, HttpException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const newTask: Task = {
      id: uuid.v4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(newTask);
    return newTask;
  }

  getTaskById(id: string): Task {
    const existingTask = this.tasks.find((task) => task.id === id);
    if (!existingTask) {
      throw new HttpException(`Cannot find task ${id}`, 404);
    }

    return existingTask;
  }

  deleteTaskById(id: string): Task[] {
    const existingTaskIndex = this.tasks.findIndex((task) => task.id === id);

    if (existingTaskIndex === -1) {
      throw new HttpException(`Cannot find task ${id}`, 404);
    }

    this.tasks.splice(existingTaskIndex, 1);
    return this.tasks;
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    for (const task of this.tasks) {
      if (task.id === id) {
        task.status = status;
        return task;
      }
    }

    throw new HttpException(`Cannot find task ${id}`, 404);
  }
}
