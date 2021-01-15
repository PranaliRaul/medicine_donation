import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board.component';
import { AddNgoComponent } from '../add-ngo/add-ngo.component';
import { NgoRequestComponent } from '../ngo-request/ngo-request.component';
import { NgoDetailComponent } from '../ngo-detail/ngo-detail.component';
import { DonatorDetailComponent } from '../donator-detail/donator-detail.component';
import { RecepientDetailComponent } from '../recepient-detail/recepient-detail.component';

const routes: Routes = [
  {
    path:'',
    component:DashBoardComponent
  },
  {
    path:'addngo',
    component:AddNgoComponent
  },
  {
    path:'ngo-request',
    component:NgoRequestComponent
  },
  {
    path:'ngo-detail',
    component:NgoDetailComponent
  },
  {
    path:'donor-detail',
    component:DonatorDetailComponent
  },
  {
    path:'recepient-detail',
    component:RecepientDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
