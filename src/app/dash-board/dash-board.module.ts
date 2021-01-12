import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  declarations: [DashBoardComponent,NavbarComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule
     
  ]
})
export class DashBoardModule { 

}
