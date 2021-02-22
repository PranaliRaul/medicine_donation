import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './register/register.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AboutusComponent } from './share/aboutus/aboutus.component';
import { FaqComponent } from './share/faq/faq.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    RegisterComponent, ForgotPasswordComponent,  
    AboutusComponent, FaqComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
