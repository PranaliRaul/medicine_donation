import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  submitted = false;
  constructor(private router:Router,private formBuilder: FormBuilder,private registerService:RegisterService) { }
  loginForm: FormGroup;
  get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({  
      email: ["", [Validators.required, Validators.email]], 
      password: ["", [Validators.required]],
    
    })
    const data =  JSON.parse(localStorage.getItem('userdata'));
    if(data){
      
    }
  }
  public changepassword():void{
  this.submitted = true;
  if(this.loginForm.valid){
   this.registerService.postdata('forgot-password', this.loginForm.value).subscribe(data =>{
    alert(data.msg);
    this.router.navigate(['/login'])
   },err =>{
     console.log(err.error);
    alert(err.error.msg);
   })
  }
}
}