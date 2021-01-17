import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineRequestComponent } from './medicine-request/medicine-request.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { recepientRouting } from './recepient.routing';

@NgModule({
  declarations: [MedicineRequestComponent, MyRequestsComponent],
  imports: [
    CommonModule,
    recepientRouting
  ]
})
export class RecepientModule { }
