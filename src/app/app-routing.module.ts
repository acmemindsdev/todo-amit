import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TasksComponent} from './pages/tasks/tasks.component';
import {TaskListComponent} from './pages/tasks/task-list/task-list.component';
import {HeaderComponent} from './pages/header/header.component';
import { TaskComponent } from './pages/content/task/task.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  { path:'tasks', component:TasksComponent },
  { path:'task-list', component:TaskListComponent },
  { path:'app-header', component:HeaderComponent },
  { path:'app-task', component:TaskComponent },
  { path:'**', component:TasksComponent },
  {path:'app-content', component:ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
