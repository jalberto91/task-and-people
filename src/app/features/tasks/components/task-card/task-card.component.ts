import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TaskItem, TaskStatus } from "../../../../shared/models/task.model";

@Component({
  selector: "app-task-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./task-card.component.html",
  styleUrl: "./task-card.component.scss",
})
export class TaskCardComponent {
  @Input() task: TaskItem;
  @Output() changeStatus = new EventEmitter<string>();
  public TaskStatus = TaskStatus;

  public onChangeStatus(): void {
    this.changeStatus.emit(this.task.id);
  }
}
