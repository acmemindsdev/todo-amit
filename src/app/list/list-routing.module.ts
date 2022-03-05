import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './content/task/task.component';
import { ListComponent } from './list.component';

const routes: Routes = [
    {
      path:'', component: ListComponent
    },
    { path: 'task', component: TaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
