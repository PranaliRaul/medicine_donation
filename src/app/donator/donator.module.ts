import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateComponent } from './donate/donate.component';
import { MyDonationsComponent } from './my-donations/my-donations.component';
import { donatorRouting } from './donator.routing';

@NgModule({
  declarations: [DonateComponent, MyDonationsComponent],
  imports: [
    CommonModule,
    donatorRouting
  ]
})
export class DonatorModule { }
