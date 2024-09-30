import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBModulesModule } from '../../shared/modules/mdb/mdb.module';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskService } from './services/task.service';
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
    FormsModule,
    ReactiveFormsModule,
    MDBModulesModule,
    TaskCardComponent,
    TaskRoutingModule,
  ],
  providers:[TaskService]
})
export class TaskModule { }
