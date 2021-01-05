import { PipeTransform } from "@nestjs/common";
export declare class TaskStatusValidationPipe implements PipeTransform {
    private readonly allowedStatuses;
    transform(value: string): string;
    private isStatusValid;
}
