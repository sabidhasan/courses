import { TaskStatus } from '../task.model';
import { IsOptional, IsIn } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn()
  status: TaskStatus;
  
  @IsOptional()
  searchTerm: string;
}
