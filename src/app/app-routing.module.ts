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

const routes: Routes = [
  {path:'',redirectTo:'login' , pathMatch:'full'},
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
    loadChildren:'./dash-board/dash-board.module#DashBoardModule',
    canActivate:[AuthGuard],
    data:{
      roleId :1
    }
  },
  {
    path:'Recepient',
    loadChildren:'./recepient/recepient.module#RecepientModule',
    canActivate:[RecepientGuard],
    data:{
      roleId :4
    }
  },
  {
    path:'donator',
    loadChildren:'./donator/donator.module#DonatorModule',
    canActivate:[DonatorGuard],

    data:{
      roleId :3
    }
  },
  {
    path:'ngo',
    loadChildren:'./ngo/ngo.module#NgoModule',
    canActivate:[NgoGuard],

    data:{
      roleId :2
    }
  },
  {
    path:'executor',
    loadChildren:'./executor/executor.module#ExecutorModule',
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
    path:'**',
    component: LoginComponent
  },
  {
    path:'faq',
    component: FaqComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
