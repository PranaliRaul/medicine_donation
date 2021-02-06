
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ngoRouting } from './ngo.routing';
import { AddExecutiveComponent } from './add-executive/add-executive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonationComponent } from './donation/donation.component';
import { RequestComponent } from './request/request.component';
import { SucessfullDonationComponent } from './sucessfull-donation/sucessfull-donation.component';
import { UnsucessfullDonationComponent } from './unsucessfull-donation/unsucessfull-donation.component';
import { NgonavigationComponent } from './ngonavigation/ngonavigation.component';
import { MedicineDonationDetailComponent } from './medicine-donation-detail/medicine-donation-detail.component';
import { MedicineRequestDetailComponent } from './medicine-request-detail/medicine-request-detail.component';
import { NgoExecutiveListComponent } from './ngo-executive-list/ngo-executive-list.component';
 
@NgModule({
  declarations: [AddExecutiveComponent,DonationComponent,RequestComponent,SucessfullDonationComponent,UnsucessfullDonationComponent, NgonavigationComponent, MedicineDonationDetailComponent, MedicineRequestDetailComponent, NgoExecutiveListComponent],

  imports: [
    CommonModule,
    ngoRouting,
   FormsModule,
   ReactiveFormsModule
  ]
})
export class NgoModule { }
