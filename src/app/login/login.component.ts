import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../share.service';

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

  constructor(private router:Router,private shareService:ShareService) { }
  public login = new login();
  ngOnInit() {
  }
  public Login():void{
    console.log(this.login)
   // if(this.login.email == 'Narendra@gmail.com' && this.login.Password=="Narendra"){
    this.shareService.islogin = true;
    this.router.navigate(['/home']);
   // }
  }

}
