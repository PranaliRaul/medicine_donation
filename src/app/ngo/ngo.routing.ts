import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnsucessfullDonationComponent } from './unsucessfull-donation/unsucessfull-donation.component';
import { SucessfullDonationComponent } from './sucessfull-donation/sucessfull-donation.component';
import { AddExecutiveComponent } from './add-executive/add-executive.component';
import { RequestComponent } from './request/request.component';
import { DonationComponent } from './donation/donation.component';
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
  }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class  ngoRouting { }