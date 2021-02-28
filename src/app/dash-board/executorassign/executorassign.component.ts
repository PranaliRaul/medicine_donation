import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-executorassign',
  templateUrl: './executorassign.component.html',
  styleUrls: ['./executorassign.component.scss']
})
export class ExecutorassignComponent implements OnInit {
  public ngo_details:any;
  app_navbar: boolean;
 

  constructor(private servive:RegisterService, private route:Router ) { }

  ngOnInit() {
    this.ngo_details = this.servive.donator_details;
    if(this.route.url === '/ngo/ngo-executive-assign-donation'){
      this.app_navbar = true;
    }
    
  }

}
