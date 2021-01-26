import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssigndonationsComponent } from './assigndonations/assigndonations.component';
import { AssignrequestsComponent } from './assignrequests/assignrequests.component';
import { DonateDetailsComponent } from './donate-details/donate-details.component';
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
  },
  {
    path:'donation-details',
    component:DonateDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutorRoutingModule { }
