import { Test } from '@nestjs/testing';
import { User } from 'src/auth/user.entity';
import { TaskRepository } from './task.repository';
import { TasksService } from './tasks.service';

const mockUser = { username: 'test' };

const mockTaskRepository = () => ({
  getTasks: jest.fn(() => (55)),
  findOne: jest.fn(),
  createTask: jest.fn(),
  deleteTaskById: jest.fn(),
});

describe('TasksService', () => {
  let tasksService: TasksService;
  let taskRepository: any;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TasksService, { provide: TaskRepository, useFactory: mockTaskRepository }]
    }).compile();

    tasksService = module.get<TasksService>(TasksService);
    taskRepository = module.get<TaskRepository>(TaskRepository);
  });

  describe('getting tasks', () => {
    it('gets tasks', async () => {
      taskRepository.getTasks.mockResolvedValue([{ id: 1, description: '1234' }]);
      
      const tasks = await tasksService.getTasks({}, mockUser as User);
      expect(tasks.length).toBe(1);
    });

    it('returns a value from getTaskById when it exists', async () => {
      taskRepository.findOne.mockResolvedValue({ id: 1, title: 'title', description: 'desc' });

      const task = await tasksService.getTaskById(1, mockUser as User);
      expect(task.id).toBe(1);      
    });

    it('throws an error from getTaskById when no task returned', async () => {
      taskRepository.findOne.mockResolvedValue(null);
      expect(tasksService.getTaskById(1, mockUser as User)).rejects.toThrow();
    });
  });

  it('creates tasks', async () => {
    taskRepository.createTask.mockResolvedValue({ id: 1, description: 'desc' });

    const task = await tasksService.createTask({ title: 'mytitle', description: 'desc' }, mockUser as User);
    expect(task.id).toBe(1);
  });

  describe('deleting tasks', () => {
    it('if deletion is successful', async () => {
      taskRepository.deleteTaskById.mockResolvedValue({ title: 'title', description: 'desc' });

      const returnVal = await tasksService.deleteTaskById(123, mockUser as User);
      expect(returnVal).toBe(undefined);
    });

    it('if deletion fails', async () => {
      taskRepository.deleteTaskById.mockResolvedValue(null);
      expect(tasksService.deleteTaskById(123, mockUser as User)).rejects.toThrow();
    });
  });
});
