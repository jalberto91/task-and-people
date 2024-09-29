import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskComponent } from "./task/task.component";

const routes: Routes = [
  {
    path: "",
    component: TaskComponent,
    children: [
      {
        path: "",
        redirectTo: "list",
        pathMatch: "full",
      },
      {
        path: "list",
        component: TaskListComponent,
      },
      {
        path: "create",
        component: CreateTaskComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
