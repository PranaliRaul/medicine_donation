import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../share.service';
import { RegisterService } from '../register/register.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

class login {
  email:string;
Password:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private formBuilder: FormBuilder,private shareService:ShareService,private registerService:RegisterService) { }
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({  
      email: ["", [Validators.required, Validators.email]], 
      Password: ["", [Validators.required]],
    
    })
  }
  public Login():void{
  if(this.loginForm.valid){
   this.registerService.postdata('login', this.loginForm.value).subscribe(data =>{
    this.router.navigate(['/home']);
   },err =>{
    alert(err.error.text);
   })
  }
  }

}
