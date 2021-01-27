import { PipeTransform, BadRequestException } from "@nestjs/common";
import { TaskStatus } from "../taskStatus";

export class TaskStatusValidationPipe implements PipeTransform {
  private readonly allowedStatuses = [
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
    TaskStatus.OPEN,
  ];

  transform(value: string): string {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException('Invalid status supplied');
    }

    return value;
  }

  private isStatusValid(status: string) {
    return this.allowedStatuses.includes(status as any);
  }
}
