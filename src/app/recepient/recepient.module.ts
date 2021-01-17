import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineRequestComponent } from './medicine-request/medicine-request.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { recepientRouting } from './recepient.routing';
import { RecepientNavigationComponent } from './recepient-navigation/recepient-navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MedicineRequestComponent, MyRequestsComponent, RecepientNavigationComponent],
  imports: [
    CommonModule,
    recepientRouting,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecepientModule { }
