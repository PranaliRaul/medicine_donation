import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'login' , pathMatch:'full'},
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  
  {
    path:'home',
    loadChildren:'./dash-board/dash-board.module#DashBoardModule'
  },
  {
    path:'Recepient',
    loadChildren:'./recepient/recepient.module#RecepientModule'
  },
  {
    path:'donator',
    loadChildren:'./donator/donator.module#DonatorModule'
  },
  {
    path:'ngo',
    loadChildren:'./ngo/ngo.module#NgoModule'
  },
  {
    path:'executor',
    loadChildren:'./executor/executor.module#ExecutorModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
