import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MDBModulesModule } from '../../shared/modules/mdb/mdb.module';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { PeopleComponent } from './components/people/people.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    CreateTaskComponent,
    PeopleComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MDBModulesModule,
    TaskItemComponent,
    TaskRoutingModule,
  ]
})
export class TaskModule { }
