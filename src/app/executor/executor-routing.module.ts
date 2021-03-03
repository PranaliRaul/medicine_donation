import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssigndonationsComponent } from './assigndonations/assigndonations.component';
import { AssignrequestsComponent } from './assignrequests/assignrequests.component';
import { DonateDetailsComponent } from './donate-details/donate-details.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { RequestTransationComponent } from './request-transation/request-transation.component';
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
    path:'assign-donation/donation-details',
    component:DonateDetailsComponent
  },
  {
    path:'assign-request/request-details',
    component:RequestDetailsComponent
  },
  {
    path:'transaction/donation-details',
    component:DonateDetailsComponent
  },
  {
    path:'request-transation/request-details',
    component:RequestDetailsComponent
  },
  {
    path:'request-transation',
    component:RequestTransationComponent
  }


]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutorRoutingModule { }
