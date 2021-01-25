"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const uuid = require("uuid");
const common_1 = require("@nestjs/common");
const task_model_1 = require("./task.model");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [];
    }
    getAllTasks() {
        return this.tasks;
    }
    getTasksWithFilters(filters) {
        const { status, searchTerm } = filters;
        let tasks = this.getAllTasks();
        if (status) {
            tasks = tasks.filter((task) => task.status === status);
        }
        if (searchTerm) {
            tasks = tasks.filter((task) => {
                return task.description.includes(searchTerm) || task.title.includes(searchTerm);
            });
        }
        return tasks;
    }
    createTask(createTaskDto) {
        const { title, description } = createTaskDto;
        const newTask = {
            id: uuid.v4(),
            title,
            description,
            status: task_model_1.TaskStatus.OPEN,
        };
        this.tasks.push(newTask);
        return newTask;
    }
    getTaskById(id) {
        return this.tasks[this.getTaskIndex(id)];
    }
    getTaskIndex(id) {
        const existingTaskIndex = this.tasks.findIndex((task) => task.id === id);
        if (existingTaskIndex === -1) {
            throw new common_1.NotFoundException(`Cannot find task ${id}`);
        }
        return existingTaskIndex;
    }
    deleteTaskById(id) {
        const existingTaskIndex = this.getTaskIndex(id);
        this.tasks.splice(existingTaskIndex, 1);
        return this.tasks;
    }
    updateTaskStatus(id, status) {
        const taskToUpdate = this.tasks[this.getTaskIndex(id)];
        taskToUpdate.status = status;
        return taskToUpdate;
    }
};
TasksService = __decorate([
    common_1.Injectable()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map