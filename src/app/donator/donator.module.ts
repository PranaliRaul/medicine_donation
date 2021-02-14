import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateComponent } from './donate/donate.component';
import { MyDonationsComponent } from './my-donations/my-donations.component';
import { donatorRouting } from './donator.routing';
import { DonatorNavigationComponent } from './donator-navigation/donator-navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { BtnComponent } from '../share/components/btn/btn.component';
import { SharemoduleModule } from '../share/sharemodule.module';

@NgModule({
  declarations: [DonateComponent, MyDonationsComponent, DonatorNavigationComponent],
  imports: [
    CommonModule,
    donatorRouting,
    FormsModule,
    ReactiveFormsModule,
   AgGridModule.withComponents([BtnComponent]),
   SharemoduleModule
  ]
})
export class DonatorModule { }
