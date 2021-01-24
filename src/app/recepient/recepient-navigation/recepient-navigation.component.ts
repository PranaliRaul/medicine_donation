import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-recepient-navigation',
  templateUrl: './recepient-navigation.component.html',
  styleUrls: ['./recepient-navigation.component.scss']
})
export class RecepientNavigationComponent implements OnInit {

  constructor(private service:RegisterService) { }

  ngOnInit() {
  }
  logout(){
    this.service.logout();
  }
}

