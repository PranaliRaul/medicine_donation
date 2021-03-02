import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
public navigation = [];
public userdata = [];
  constructor(private service:RegisterService) { }

  ngOnInit() {
    this.userdata = JSON.parse(localStorage.getItem('userdata'));
    if(!this.userdata){
      this.navigation = environment.LOGIN_NAVIGATION;
    } else if(this.userdata[0].roleId === 1){
      this.navigation = environment.ADMIN_NAVIGATION
    } else if(this.userdata[0].roleId === 2){
      this.navigation = environment.NGO_NAVIGATION
    }else if(this.userdata[0].roleId === 3){
      this.navigation = environment.DONATOR_NAVIGATION
    }else if(this.userdata[0].roleId === 4){
      this.navigation = environment.RECEPIENT_NAVIGATION
    }else if(this.userdata[0].roleId === 5){
      this.navigation = environment.EXECUTOR_NAVIGATION 
    }
    console.log( this.navigation)
  }
  public logout(){
    this.service.logout();
  }
}
