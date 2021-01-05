"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const task_model_1 = require("../task.model");
class TaskStatusValidationPipe {
    constructor() {
        this.allowedStatuses = [
            task_model_1.TaskStatus.DONE,
            task_model_1.TaskStatus.IN_PROGRESS,
            task_model_1.TaskStatus.OPEN,
        ];
    }
    transform(value) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException('Invalid status supplied');
        }
        return value;
    }
    isStatusValid(status) {
        return this.allowedStatuses.includes(status);
    }
}
exports.TaskStatusValidationPipe = TaskStatusValidationPipe;
//# sourceMappingURL=task-status-validation.pipe.js.map