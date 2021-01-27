import { TaskStatus } from '../taskStatus';
import { IsEnum, IsOptional } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus, { message: 'Invalid task status' })
  status: TaskStatus;
  
  @IsOptional()
  search: string;
}
