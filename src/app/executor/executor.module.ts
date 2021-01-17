import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutorRoutingModule } from './executor-routing.module';
import { AssigndonationsComponent } from './assigndonations/assigndonations.component';
import { AssignrequestsComponent } from './assignrequests/assignrequests.component';
import { TransationComponent } from './transation/transation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExecutorNavigationComponent } from './executor-navigation/executor-navigation.component';

@NgModule({
  declarations: [AssigndonationsComponent, AssignrequestsComponent, TransationComponent, ExecutorNavigationComponent],
  imports: [
    CommonModule,
    ExecutorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExecutorModule { }
