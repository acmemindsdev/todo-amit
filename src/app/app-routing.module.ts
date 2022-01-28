import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TasksComponent} from './pages/tasks/tasks.component';
import {TaskListComponent} from './pages/tasks/task-list/task-list.component';
const routes: Routes = [
  { path:'tasks', component:TasksComponent },
  { path:'task-list', component:TaskListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
