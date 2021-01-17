import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExecutiveComponent } from './add-executive/add-executive.component';
import { DonationComponent } from './donation/donation.component';
import { RequestComponent } from './request/request.component';
import { SucessfullDonationComponent } from './sucessfull-donation/sucessfull-donation.component';
import { UnsucessfullDonationComponent } from './unsucessfull-donation/unsucessfull-donation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddExecutiveComponent, DonationComponent, RequestComponent, SucessfullDonationComponent, UnsucessfullDonationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NgoModule { }
