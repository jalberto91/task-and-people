import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    CreateTaskComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    TaskItemComponent
  ]
})
export class TaskModule { }
