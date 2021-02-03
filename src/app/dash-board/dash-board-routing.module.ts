import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board.component';
import { AddNgoComponent } from '../add-ngo/add-ngo.component';
import { NgoRequestComponent } from '../ngo-request/ngo-request.component';
import { NgoDetailComponent } from '../ngo-detail/ngo-detail.component';
import { DonatorDetailComponent } from '../donator-detail/donator-detail.component';
import { RecepientDetailComponent } from '../recepient-detail/recepient-detail.component';
import { NgoIndetailsComponent } from './ngo-indetails/ngo-indetails.component';
import { DonatorIndetailsComponent } from './donator-indetails/donator-indetails.component';
import { RecepientIndetailsComponent } from './recepient-indetails/recepient-indetails.component';
import { ExecutiveListComponent } from './executive-list/executive-list.component';
import {  NgoDonationComponent } from './ngo-donation/ngo-donation.component';
import {   NgoMedRequestComponent } from './ngo-med-request/ngo-med-request.component';
import { DonationMadeComponent } from './donation-made/donation-made.component';
import { BefPersonComponent } from './bef-person/bef-person.component';
import { RequestMadeComponent } from './request-made/request-made.component';

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
  },
  {
    path:'ngo-activate',
    component:NgoIndetailsComponent
  },
  {
    path:'donor-in-detail',
    component:DonatorIndetailsComponent
  },
  {
    path:'recepient-in-detail',
    component:RecepientIndetailsComponent
  },
  {
    path:'ngo-executive-list',
    component:ExecutiveListComponent
  },
  {
    path:'ngo-medicine-donation',
    component: NgoDonationComponent
  },
  {
    path:'ngo-medicine-request',
    component:NgoMedRequestComponent
  },
  {
    path:'benefited-person',
    component:BefPersonComponent
  },
  {
    path:'donation-made',
    component:DonationMadeComponent
  },
  {
    path:'request-made',
    component:RequestMadeComponent
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
