import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DonatorGuard } from './auth/donator.guard';
import { ExecutorGuard } from './auth/executor.guard';
import { NgoGuard } from './auth/ngo.guard';
import { RecepientGuard } from './auth/recepient.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AboutusComponent } from './share/aboutus/aboutus.component';
import { FaqComponent } from './share/faq/faq.component';
import { EventsComponent } from './share/events/events.component';
import { HomepageComponent } from './share/homepage/homepage.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ActivateuserComponent } from './activateuser/activateuser.component';

const routes: Routes = [
 {path:'',redirectTo:'homepage' , pathMatch:'full'},
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent,
    // canActivate:[AuthGuard],
  },
  {
    path:'forgot-password',
    component:  ForgotPasswordComponent
  },
  {
    path:'home',
    loadChildren:() => import('./dash-board/dash-board.module').then(m => m.DashBoardModule),
    canActivate:[AuthGuard],
    data:{
      roleId :1
    },
   
  },
  {
    path:'Recepient',
    loadChildren:() => import('./recepient/recepient.module').then(m => m.RecepientModule),
    canActivate:[RecepientGuard],
    data:{
      roleId :4
    }
  },
  {
    path:'donator',
    loadChildren:() => import('./donator/donator.module').then(m => m.DonatorModule),
    canActivate:[DonatorGuard],

    data:{
      roleId :3
    }
  },
  {
    path:'ngo',
    loadChildren:() => import('./ngo/ngo.module').then(m => m.NgoModule),
    canActivate:[NgoGuard],

    data:{
      roleId :2
    }
  },
  {
    path:'executor',
    loadChildren:() => import('./executor/executor.module').then(m => m.ExecutorModule),
    canActivate:[ExecutorGuard],

    data:{
      roleId :5
    }
  },
  {
    path:'about-us',
    component:AboutusComponent
  },
  {
    path:'faq',
    component: FaqComponent
  },
  { 
    path:'events',
    component: EventsComponent
  },
  {
    path:'homepage',
    component:DashBoardComponent
  },
  {
    path:'activate/:token',
    component:ActivateuserComponent
  },
  {
    path:'**',
    component: LoginComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
