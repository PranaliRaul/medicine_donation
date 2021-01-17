import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  donatorRouting { }
