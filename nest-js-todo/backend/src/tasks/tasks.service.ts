import * as uuid from 'uuid';
import { Injectable, HttpException, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilters(filters: GetTasksFilterDto): Task[] {
    const { status, searchTerm } = filters;
    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (searchTerm) {
      tasks = tasks.filter((task) => {
        return task.description.includes(searchTerm) || task.title.includes(searchTerm);
      })
    }
    
    return tasks;
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
    return this.tasks[this.getTaskIndex(id)];
  }

  getTaskIndex(id: string): number {
    const existingTaskIndex = this.tasks.findIndex((task) => task.id === id);

    if (existingTaskIndex === -1) {
      throw new NotFoundException(`Cannot find task ${id}`);
    }

    return existingTaskIndex;
  }

  deleteTaskById(id: string): Task[] {
    const existingTaskIndex = this.getTaskIndex(id);
    this.tasks.splice(existingTaskIndex, 1);
    return this.tasks;
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const taskToUpdate = this.tasks[this.getTaskIndex(id)];
    taskToUpdate.status = status;
    return taskToUpdate;
  }
}
