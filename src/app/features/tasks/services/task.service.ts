import { Injectable } from "@angular/core";
import { ulid } from "ulidx";
import { TASKS } from "../../../shared/constants";
import { TaskItem, TaskStatus } from "../../../shared/models/task.model";
import { StoreService } from "../../../shared/services/store.service";

@Injectable()
export class TaskService {
  constructor(private storeService: StoreService) {}

  public createTask(task: TaskItem): void {
    const tasks = this.getTasks();
    task.id = ulid();
    task.status = TaskStatus.Pending;
    task.persons.forEach((p) => (p.id = ulid()));
    tasks.push(task);
    this.storeService.setItem(TASKS, JSON.stringify(tasks));
  }

  public getTasks(): TaskItem[] {
    const tasksJson = this.storeService.getItem(TASKS);
    return tasksJson ? JSON.parse(tasksJson) : [];
  }

  public updateTask(updatedTask: TaskItem): void {
    const tasks = this.getTasks();
    const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);
    if (taskIndex !== -1) {
      tasks[taskIndex] = updatedTask;
      this.storeService.setItem(TASKS, JSON.stringify(tasks));
    }
  }
}
