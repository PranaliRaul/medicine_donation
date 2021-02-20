import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { BtnComponent } from './components/btn/btn.component';
import { CollectedstatusComponent } from './components/collectedstatus/collectedstatus.component';
import { DeliveredstatusComponent } from './components/deliveredstatus/deliveredstatus.component';
import { DateComponent } from './components/date/date.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MedicinetypeComponent } from './medicinetype/medicinetype.component';
import { RecepientIndetailsComponent } from '../dash-board/recepient-indetails/recepient-indetails.component';
import { RecepientNavigationComponent } from '../recepient/recepient-navigation/recepient-navigation.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgoTransationComponent } from './components/ngo-transation/ngo-transation.component';
import { ExecutorAssignRequestComponent } from './components/executor-assign-request/executor-assign-request.component';

@NgModule({
  declarations: [BtnComponent, CollectedstatusComponent, 
                DeliveredstatusComponent, DateComponent, HomepageComponent,
                MedicinetypeComponent,RecepientIndetailsComponent,RecepientNavigationComponent,
                NavbarComponent, NgoTransationComponent, ExecutorAssignRequestComponent],
  imports: [
    CommonModule,
    RouterModule,
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
    MedicinetypeComponent,
    RecepientIndetailsComponent,
    RecepientNavigationComponent,
    NavbarComponent,
    NgoTransationComponent,
    ExecutorAssignRequestComponent
  ]
})
export class SharemoduleModule {
  
 }
