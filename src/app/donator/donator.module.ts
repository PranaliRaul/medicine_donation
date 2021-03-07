import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateComponent } from './donate/donate.component';
import { MyDonationsComponent } from './my-donations/my-donations.component';
import { donatorRouting } from './donator.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { BtnComponent } from '../share/components/btn/btn.component';
import { SharemoduleModule } from '../share/sharemodule.module';
import { DatePipe } from '@angular/common'
@NgModule({
  declarations: [DonateComponent, MyDonationsComponent],
  imports: [
    CommonModule,
    donatorRouting,
    FormsModule,
    ReactiveFormsModule,
   AgGridModule.withComponents([BtnComponent]),
   SharemoduleModule
  ],
  providers:[DatePipe]
})
export class DonatorModule { }
