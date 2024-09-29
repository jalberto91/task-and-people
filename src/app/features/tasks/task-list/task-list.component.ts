import { Component, OnInit } from "@angular/core";
import { TaskStatusOption } from "../../../shared/models/task-status-option.model";
import { TaskItem, TaskStatus } from "../../../shared/models/task.model";
import { TASK_STATUS_OPTIONS } from "../constants";
import { TaskService } from "../services/task.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrl: "./task-list.component.scss",
})
export class TaskListComponent implements OnInit {
  public tasks: TaskItem[] = [];
  public selectedStatus: TaskStatus;
  public taskStatusOptions: TaskStatusOption[] = [];

  constructor(private taskService: TaskService) {
    this.taskStatusOptions = TASK_STATUS_OPTIONS;
  }

  ngOnInit(): void {
    this.selectedStatus = TaskStatus.All;
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks);
  }

  public trackByTaskId(index: number, task: TaskItem): string {
    return task.id;
  }

  public onSelectStatus(status: number): void {
    console.log(status);
  }

  public onChangeTaskStatus(taskId: string): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.status = TaskStatus.Finished;
      // Aquí podrías llamar a un servicio si necesitas actualizar el estado en el backend
    }
  }
}
