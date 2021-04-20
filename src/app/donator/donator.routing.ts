import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonateDetailsComponent } from '../executor/donate-details/donate-details.component';
import { RegisteredNgoComponent } from '../share/registered-ngo/registered-ngo.component';
import { DonateComponent } from './donate/donate.component';
import { MyDonationsComponent } from './my-donations/my-donations.component';

const routes: Routes = [
  {
    path:'my-donation',
    component:MyDonationsComponent
  },
  {
    path:'donation',
    component:DonateComponent
  },
  {
    path:'registered-ngo',
    component:RegisteredNgoComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  donatorRouting { }
