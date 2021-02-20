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
  get f() { return this.loginForm.controls; }
  submitted = false
  constructor(private router:Router,private formBuilder: FormBuilder,private shareService:ShareService,private registerService:RegisterService) { }
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({  
      email: ["", [Validators.required, Validators.email]], 
      Password: ["", [Validators.required]],
    
    })
    const data =  JSON.parse(localStorage.getItem('userdata'));
    if(data){
       this.islogin(data);
    }
  }
  public Login():void{
  this.submitted = true;
  if(this.loginForm.valid){
   this.registerService.postdata('login', this.loginForm.value).subscribe(data =>{
     localStorage.setItem('userdata',JSON.stringify(data));
    this.islogin(data);
   },err =>{
     console.log(err.error.errr);
    alert(err.error.errr);
   })
  }
  }

  public islogin(data){
    if(data[0].roleId === 1){
      this.router.navigate(['/home']);
      }else if (data[0].roleId === 2){
        this.router.navigate(['/ngo/medicine-donation']);
      }else if(data[0].roleId === 3){
        this.router.navigate(['/donator/my-donation']);
      } else if(data[0].roleId === 5){
        this.router.navigate(['/executor/assign-request']);
      }
      else{
        this.router.navigate(['/Recepient/my-request']);       
      }
  }


}
