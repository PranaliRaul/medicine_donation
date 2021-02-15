import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { BtnComponent } from './components/btn/btn.component';
import { CollectedstatusComponent } from './components/collectedstatus/collectedstatus.component';
import { DeliveredstatusComponent } from './components/deliveredstatus/deliveredstatus.component';
import { DateComponent } from './components/date/date.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MedicinetypeComponent } from './medicinetype/medicinetype.component';

@NgModule({
  declarations: [BtnComponent, CollectedstatusComponent, DeliveredstatusComponent, DateComponent, HomepageComponent, MedicinetypeComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([BtnComponent,DateComponent,DeliveredstatusComponent,CollectedstatusComponent,MedicinetypeComponent]),
  ],
  exports: [
    CommonModule,
    AgGridModule,
    BtnComponent,
    CollectedstatusComponent,
    DateComponent,
    DeliveredstatusComponent,
    HomepageComponent,
    MedicinetypeComponent
  ]
})
export class SharemoduleModule { }
