import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisteredNgoComponent } from '../share/registered-ngo/registered-ngo.component';
import { MedicineRequestComponent } from './medicine-request/medicine-request.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { NgoMedicineRequestComponent } from './ngo-medicine-request/ngo-medicine-request.component';
 
const routes: Routes = [
  
  {
    path:'my-request',
    component:MyRequestsComponent 
  },
  {
    path:'medicine-request',
    component:MedicineRequestComponent
  },
  {
    path:'ngo-medicine-request',
    component:NgoMedicineRequestComponent
  },
  {
    path:'registered-ngo',
    component:RegisteredNgoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  recepientRouting { }
