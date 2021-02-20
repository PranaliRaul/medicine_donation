import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from '../share.service';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router:Router,private formBuilder: FormBuilder,private registerService:RegisterService) { }
  loginForm: FormGroup;
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
  if(this.loginForm.valid){
   this.registerService.postdata('forgot-password', this.loginForm.value).subscribe(data =>{
      
    alert(data.msg);
    this.router.navigate(['/login'])
   },err =>{
     console.log(err.error.errr);
    alert(err.error.errr);
   })
  }
}
}