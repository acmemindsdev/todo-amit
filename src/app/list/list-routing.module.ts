import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';

const routes: Routes = [
    {
      path:'', component: ListComponent
    },
    {
      path: 'testlist1', component: ListComponent
    },
    {
      path: 'testlist2', component: ListComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
