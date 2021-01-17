import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineRequestComponent } from './medicine-request/medicine-request.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
 
const routes: Routes = [
  
  {
    path:'my-request',
    component:MyRequestsComponent 
  },
  {
    path:'medicine-request',
    component:MedicineRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  recepientRouting { }
