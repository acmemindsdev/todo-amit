import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { TaskComponent } from './content/task/task.component';
import { AllTaskListComponent } from './content/task/all-task-list/all-task-list.component';
import { AddTaskComponent } from './content/add-task/add-task.component';


@NgModule({
  declarations: [
    ListComponent,
    HeaderComponent,
    SidebarComponent,
    TaskComponent,
    AllTaskListComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    MatDividerModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
  ]
})
export class ListModule { }
