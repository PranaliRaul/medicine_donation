import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


import { BtnComponent } from './components/btn/btn.component';
import { CollectedstatusComponent } from './components/collectedstatus/collectedstatus.component';
import { DeliveredstatusComponent } from './components/deliveredstatus/deliveredstatus.component';
import { DateComponent } from './components/date/date.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MedicinetypeComponent } from './medicinetype/medicinetype.component';
import { RecepientIndetailsComponent } from '../dash-board/recepient-indetails/recepient-indetails.component';
import { RecepientNavigationComponent } from '../recepient/recepient-navigation/recepient-navigation.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgoTransationComponent } from './components/ngo-transation/ngo-transation.component';
import { ExecutorAssignRequestComponent } from './components/executor-assign-request/executor-assign-request.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { NgonavigationComponent } from '../ngo/ngonavigation/ngonavigation.component';
import { ExecutiveDeatilsComponent } from '../dash-board/executive-deatils/executive-deatils.component';
import { ExecutorassignComponent } from '../dash-board/executorassign/executorassign.component';
import { ExectorAssignRequestComponent } from '../dash-board/exector-assign-request/exector-assign-request.component';
@NgModule({
  declarations: [BtnComponent, CollectedstatusComponent,
    DeliveredstatusComponent, DateComponent, HomepageComponent,
    MedicinetypeComponent, RecepientIndetailsComponent, RecepientNavigationComponent,
    NavbarComponent, NgoTransationComponent, ExecutorAssignRequestComponent, NavigationComponent, FooterComponent,
    PopUpComponent, NgonavigationComponent,ExecutiveDeatilsComponent,ExecutorassignComponent,ExectorAssignRequestComponent],

  imports: [
    CommonModule,
    RouterModule,
    AgGridModule.withComponents([BtnComponent, DateComponent, DeliveredstatusComponent, CollectedstatusComponent, MedicinetypeComponent]),
    NgbModule
  ],
  exports: [
    CommonModule,
    AgGridModule,
    BtnComponent,
    CollectedstatusComponent,
    DateComponent,
    DeliveredstatusComponent,
    HomepageComponent,
    MedicinetypeComponent,
    RecepientIndetailsComponent,
    RecepientNavigationComponent,
    NavbarComponent,
    NgoTransationComponent,
    ExecutorAssignRequestComponent,
    FooterComponent,
    NavigationComponent,
    NgbModule,
    PopUpComponent,
    NgonavigationComponent,
    ExecutiveDeatilsComponent,
    ExecutorassignComponent,
    ExectorAssignRequestComponent
  ]
})
export class SharemoduleModule {

}
