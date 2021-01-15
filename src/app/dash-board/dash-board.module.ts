import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AddNgoComponent } from '../add-ngo/add-ngo.component';
import { FormsModule } from '@angular/forms';
import { NgoRequestComponent } from '../ngo-request/ngo-request.component';
import { NgoDetailComponent } from '../ngo-detail/ngo-detail.component';
import { DonatorDetailComponent } from '../donator-detail/donator-detail.component';
import { RecepientDetailComponent } from '../recepient-detail/recepient-detail.component';

@NgModule({
  declarations: [DashBoardComponent,NavbarComponent,AddNgoComponent,NgoRequestComponent,NgoDetailComponent,DonatorDetailComponent,RecepientDetailComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    FormsModule
  ]
})
export class DashBoardModule { 

}
