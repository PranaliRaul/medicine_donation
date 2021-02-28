import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnsucessfullDonationComponent } from './unsucessfull-donation/unsucessfull-donation.component';
import { SucessfullDonationComponent } from './sucessfull-donation/sucessfull-donation.component';
import { AddExecutiveComponent } from './add-executive/add-executive.component';
import { RequestComponent } from './request/request.component';
import { DonationComponent } from './donation/donation.component';
import { MedicineDonationDetailComponent } from './medicine-donation-detail/medicine-donation-detail.component';
import { MedicineRequestDetailComponent } from './medicine-request-detail/medicine-request-detail.component';
import { NgoExecutiveListComponent } from './ngo-executive-list/ngo-executive-list.component';
import { RecepientIndetailsComponent } from '../dash-board/recepient-indetails/recepient-indetails.component';
import { ExecutiveDeatilsComponent } from '../dash-board/executive-deatils/executive-deatils.component';
import { ExecutorassignComponent } from '../dash-board/executorassign/executorassign.component';
import { ExectorAssignRequestComponent } from '../dash-board/exector-assign-request/exector-assign-request.component';
const routes: Routes = [
    {
        path:'',
        component: AddExecutiveComponent
    },
  {
    path:'medicine-donation',
    component: DonationComponent
  },
  {
    path:'medicine-request',
    component: RequestComponent
  },
  {
    path:'Add-executor',
    component: AddExecutiveComponent
  },
  {
    path:'sucessful-donation',
    component: SucessfullDonationComponent
  },
  {
    path:'unsucessful-donation',
    component: UnsucessfullDonationComponent
  },
  {
    path:'medicine-donation-details',
    component: MedicineDonationDetailComponent
  },
  {
    path:'medicine-request-detail',
    component: MedicineRequestDetailComponent
  },
  {
    path:'ngo-executive-list',
    component: NgoExecutiveListComponent
  },
  {
    path:'ngo-executive-deatails',
    component: ExecutiveDeatilsComponent
  },
  {
    path:'ngo-executive-assign-donation',
    component: ExecutorassignComponent
  },
  {
    path:'ngo-executive-assign-request',
    component: ExectorAssignRequestComponent
  }
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class  ngoRouting { }