import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  // {
  //   path: 'tasks', loadChildren: () => import('./list/tasks/tasks.module').then(m => m.TasksModule)
  // },
  {
    path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
