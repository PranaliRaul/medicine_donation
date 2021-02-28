import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exector-assign-request',
  templateUrl: './exector-assign-request.component.html',
  styleUrls: ['./exector-assign-request.component.scss']
})
export class ExectorAssignRequestComponent implements OnInit {

  public ngo_details:any;
  app_navbar: boolean;
  constructor(private servive:RegisterService, private route:Router) { }

  ngOnInit() {
    this.ngo_details = this.servive.donator_details;
    
    if(this.route.url == '/ngo/ngo-executive-assign-request'){
      this.app_navbar = true;
    }
  }

}
