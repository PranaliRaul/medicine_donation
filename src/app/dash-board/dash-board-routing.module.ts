import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board.component';
import { AddNgoComponent } from '../add-ngo/add-ngo.component';

const routes: Routes = [
  {
    path:'',
    component:DashBoardComponent
  },
  {
    path:'addngo',
    component:AddNgoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
