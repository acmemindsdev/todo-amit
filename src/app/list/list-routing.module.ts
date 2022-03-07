import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { TaskComponent } from './content/task/task.component';

const routes: Routes = [
    {
      path:'', component: ListComponent
    },
    // {
    //   path: 'testlist1', component: ListComponent
    // },
    // {
    //   path: 'testlist2', component: ListComponent,
    // },
    {
      path: 'task', component: TaskComponent
    },
    {
      // path: 'task', loadChildren: () => import('./content/task/task.component').then(m => m.TaskComponent)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
