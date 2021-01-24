import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-donator-navigation',
  templateUrl: './donator-navigation.component.html',
  styleUrls: ['./donator-navigation.component.scss']
})
export class DonatorNavigationComponent implements OnInit {

  constructor(private service:RegisterService) { }

  ngOnInit() {
  }
  logout(){
    this.service.logout();
  }
}