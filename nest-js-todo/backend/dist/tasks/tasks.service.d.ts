import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTasksWithFilters(filters: GetTasksFilterDto): Task[];
    createTask(createTaskDto: CreateTaskDto): Task;
    getTaskById(id: string): Task;
    getTaskIndex(id: string): number;
    deleteTaskById(id: string): Task[];
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
