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
    component: RecepientIndetailsComponent
  }
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class  ngoRouting { }