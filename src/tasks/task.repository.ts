import { CreateTaskDto } from 'module1/tasks/dto/create-task.dto';
import { GetTasksFilterDto } from 'module1/tasks/dto/get-tasks-filter.dto';
import { TaskStatus } from 'module1/tasks/task.model';
import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async getTasks(
    taskFiltersDto: GetTasksFilterDto,
    user: User,
  ): Promise<Task[]> {
    const { search, status } = taskFiltersDto;
    const query = this.createQueryBuilder('task');
    if (search) {
      query.andWhere(
        'task.title like :search OR task.description like :search',
        { search: `%${search}%` },
      );
    }
    if (status) {
      query.andWhere('task.status = :status', { status });
    }
    query.andWhere('task.userId =:userId', { userId: user.id });
    const tasks = await query.getMany();
    return tasks;
  }

  async createTask(createTaskDto: CreateTaskDto, user: User) {
    const { title, description } = createTaskDto;
    const task = new Task();
    task.title = title;
    task.user = user;
    task.description = description;
    task.status = TaskStatus.OPEN;
    await task.save();
    delete task.user;
    return task;
  }
}
