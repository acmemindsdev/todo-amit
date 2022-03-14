import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { AllTaskListComponent } from './task/all-task-list/all-task-list.component';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AllTaskListComponent,
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDividerModule,
    FormsModule,
    MatGridListModule,
    MatButtonModule,

  ]
})
export class ContentModule { }
