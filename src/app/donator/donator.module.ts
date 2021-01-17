import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateComponent } from './donate/donate.component';
import { MyDonationsComponent } from './my-donations/my-donations.component';
import { donatorRouting } from './donator.routing';
import { DonatorNavigationComponent } from './donator-navigation/donator-navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DonateComponent, MyDonationsComponent, DonatorNavigationComponent],
  imports: [
    CommonModule,
    donatorRouting,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DonatorModule { }
