import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-ngonavigation',
  templateUrl: './ngonavigation.component.html',
  styleUrls: ['./ngonavigation.component.scss']
})
export class NgonavigationComponent implements OnInit {

  constructor(private service:RegisterService) { }

  ngOnInit() {
  }
  logout(){
    this.service.logout();
  }
}
