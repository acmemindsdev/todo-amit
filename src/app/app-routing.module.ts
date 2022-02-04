import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', redirectTo:'tasks', pathMatch:'full' },
  { path: 'tasks', component:TasksComponent },
  { path: 'sidenav', component:SidebarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
