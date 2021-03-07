import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineRequestComponent } from './medicine-request/medicine-request.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { recepientRouting } from './recepient.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgoMedicineRequestComponent } from './ngo-medicine-request/ngo-medicine-request.component';
import { AgGridModule } from 'ag-grid-angular';
import { BtnComponent } from '../share/components/btn/btn.component';
import { SharemoduleModule } from '../share/sharemodule.module';

@NgModule({
  declarations: [MedicineRequestComponent, MyRequestsComponent,  NgoMedicineRequestComponent],
  imports: [
    CommonModule,
    recepientRouting,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([BtnComponent]),
   SharemoduleModule
  ]
})
export class RecepientModule { }
