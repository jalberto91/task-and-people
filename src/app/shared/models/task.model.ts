import { People } from "./people.model";

export enum TaskStatus {
    "All" = 0,
    "Finished" = 1,
    "Pending" = 2,
  }

export class TaskItem {
    constructor(
      public id: string = null,
      public name: string = null,
      public status: TaskStatus = TaskStatus.Pending,
      public deadLine: Date = new Date(),
      public persons: Array<People> = new Array<People>()
    ) {}
  }