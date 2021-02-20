import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';
 
@Component({
  selector: 'app-request-transation',
  templateUrl: './request-transation.component.html',
  styleUrls: ['./request-transation.component.scss']
})
export class RequestTransationComponent implements OnInit {
  email = JSON.parse(localStorage.getItem('userdata'))[0].email;

  constructor(private registerService:RegisterService,private route:Router) { 
     
    
   }
   onBtnClick1(e) {
    this.registerService.request_details =  e.rowData;
    this.route.navigate(['/executor/request-details'])
  }
   

  ngOnInit() {
    
  }
  

  details(data){
    this.registerService.request_details = data;
    this.route.navigate(['/executor/request-details'])

  }

}
