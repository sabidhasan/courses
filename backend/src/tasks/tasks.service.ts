import * as uuid from 'uuid';
import { Injectable } from '@nestjs/common';
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
}
