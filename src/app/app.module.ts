import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgoRequestComponent } from './ngo-request/ngo-request.component';
import { NgoDetailComponent } from './ngo-detail/ngo-detail.component';
import { DonatorDetailComponent } from './donator-detail/donator-detail.component';
import { RecepientDetailComponent } from './recepient-detail/recepient-detail.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    RegisterComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
