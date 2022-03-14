import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { AddTaskComponent } from './content/add-task/add-task.component';

const routes: Routes = [
    {
      path:'', component: ListComponent,
      children: [
        {
          path: ':rout', loadChildren: () => import('./content/content.module').then(m => m.ContentModule),
        },
        {
          path:'', component: AddTaskComponent
        }
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
