import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private service:RegisterService) { }

  ngOnInit() {
  }
  logout(){
    this.service.logout();
  }
}
