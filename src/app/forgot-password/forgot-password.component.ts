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
  fieldTextType:boolean;
  fieldTextType2:boolean;
  public sentotp = true;
  public validotp = false;
  public changepass = false
  get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({  
      email: ["", [Validators.required, Validators.email]], 
      password: ["", [Validators.required,Validators.minLength(6)]],
      otp: ["", [Validators.required,Validators.minLength(6)]],
      confirm_password: ["", [Validators.required]],

    },{ validators: this.checkPasswords })
    const data =  JSON.parse(localStorage.getItem('userdata'));
    if(data){
      
    }
  }
  
  checkPasswords(group: FormGroup) { 
  const password = group.get('password').value;
  const confirmPassword = group.get('confirm_password').value; 
  return password === confirmPassword ? null : { notSame: true }     
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

public toggleFieldTextType(){
this.fieldTextType = !this.fieldTextType 
}
public toggleFieldTextType2(){
this.fieldTextType2 = !this.fieldTextType2; 
}

public keyPress(event: any) {
  const pattern = /[0-9\+\-\ ]/;

  let inputChar = String.fromCharCode(event.charCode);
  if (event.keyCode != 8 && !pattern.test(inputChar)) {
    event.preventDefault();
  }
}

public sendotp(){ 
  this.submitted = true;
  if(!this.loginForm.controls['email'].errors){
    this.registerService.postdata('otp', {email:this.loginForm.value.email}).subscribe(data =>{
    this.loginForm.controls['email'].disable();
    alert('OTP sent on your email. Please check your mail')
    this.validotp = true;
    this.sentotp = false;
     
    },err =>{
     alert(err.error.msg);
    })
   }
}

public validateotp(){
  if(!this.loginForm.controls['otp'].errors){
    this.registerService.postdata('otp',  {email:this.f.email.value,otp:this.f.otp.value }).subscribe(data =>{
    this.validotp = false;
    this.changepass = true;
    alert('OTP Validation Successfull')
    this.loginForm.controls['email'].enable();
     
    },err =>{
     alert(err.error.msg);
    })
   }
}
}