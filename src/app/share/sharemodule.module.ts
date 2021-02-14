import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { CollectedstatusComponent } from './components/collectedstatus/collectedstatus.component';
import { DeliveredstatusComponent } from './components/deliveredstatus/deliveredstatus.component';
import { DateComponent } from './components/date/date.component';

@NgModule({
  declarations: [BtnComponent, CollectedstatusComponent, DeliveredstatusComponent, DateComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    BtnComponent,
    CollectedstatusComponent,
    DateComponent,
    DeliveredstatusComponent
  ]
})
export class SharemoduleModule { }
