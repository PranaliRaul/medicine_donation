import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutorRoutingModule } from './executor-routing.module';
import { AssigndonationsComponent } from './assigndonations/assigndonations.component';
import { AssignrequestsComponent } from './assignrequests/assignrequests.component';
import { TransationComponent } from './transation/transation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonateDetailsComponent } from './donate-details/donate-details.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { RequestTransationComponent } from './request-transation/request-transation.component';
import { AgGridModule } from 'ag-grid-angular';
import { BtnComponent } from '../share/components/btn/btn.component';
import { SharemoduleModule } from '../share/sharemodule.module';

@NgModule({
  declarations: [AssigndonationsComponent, AssignrequestsComponent, TransationComponent,DonateDetailsComponent, RequestDetailsComponent, RequestTransationComponent],
  imports: [
    CommonModule,
    ExecutorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([BtnComponent]),
   SharemoduleModule 

  ]
})
export class ExecutorModule { }
