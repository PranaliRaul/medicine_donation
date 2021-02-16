import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from "ag-grid-angular";

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AddNgoComponent } from '../add-ngo/add-ngo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgoRequestComponent } from '../ngo-request/ngo-request.component';
import { NgoDetailComponent } from '../ngo-detail/ngo-detail.component';
import { DonatorDetailComponent } from '../donator-detail/donator-detail.component';
import { RecepientDetailComponent } from '../recepient-detail/recepient-detail.component';
import { NgoIndetailsComponent } from './ngo-indetails/ngo-indetails.component';
import { DonatorIndetailsComponent } from './donator-indetails/donator-indetails.component';
import { RecepientIndetailsComponent } from './recepient-indetails/recepient-indetails.component';
import { ExecutiveListComponent } from './executive-list/executive-list.component';
import { NgoDonationComponent } from './ngo-donation/ngo-donation.component';
import { NgoMedRequestComponent } from './ngo-med-request/ngo-med-request.component';
import { BefPersonComponent } from './bef-person/bef-person.component';
import { DonationMadeComponent } from './donation-made/donation-made.component';
import { RequestMadeComponent } from './request-made/request-made.component';
import { SharemoduleModule } from '../share/sharemodule.module';
import { BtnComponent } from '../share/components/btn/btn.component';
 import { DateComponent } from '../share/components/date/date.component';
import { ExecutiveDeatilsComponent } from './executive-deatils/executive-deatils.component';

@NgModule({
  declarations: [DashBoardComponent,AddNgoComponent,NgoRequestComponent,NgoDetailComponent,DonatorDetailComponent,RecepientDetailComponent, NgoIndetailsComponent, DonatorIndetailsComponent,  ExecutiveListComponent, NgoDonationComponent, NgoMedRequestComponent, BefPersonComponent, DonationMadeComponent, RequestMadeComponent, ExecutiveDeatilsComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
     AgGridModule.withComponents([BtnComponent,DateComponent]),
    SharemoduleModule

  ]
})
export class DashBoardModule { 

}
