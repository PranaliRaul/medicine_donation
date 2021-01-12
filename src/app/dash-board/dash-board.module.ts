import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AddNgoComponent } from '../add-ngo/add-ngo.component';

@NgModule({
  declarations: [DashBoardComponent,NavbarComponent,AddNgoComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule
     
  ]
})
export class DashBoardModule { 

}
