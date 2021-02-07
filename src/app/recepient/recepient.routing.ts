import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  recepientRouting { }
