import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssigndonationsComponent } from './assigndonations/assigndonations.component';
import { AssignrequestsComponent } from './assignrequests/assignrequests.component';
import { TransationComponent } from './transation/transation.component';

const routes: Routes = [
  {
    path:'assign-donation',
    component:AssigndonationsComponent
  },
  {
    path:'assign-request',
    component: AssignrequestsComponent
  },
  {
    path:'transaction',
    component:  TransationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutorRoutingModule { }
