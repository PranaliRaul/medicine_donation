import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-assignrequests',
  templateUrl: './assignrequests.component.html',
  styleUrls: ['./assignrequests.component.scss']
})
export class AssignrequestsComponent implements OnInit {

  list =[];
  userId:number;

  constructor(private registerService:RegisterService,private route:Router) { }


  ngOnInit() {
    this.getngolist();
  }
  public getngolist():void{
    this.userId = JSON.parse(localStorage.getItem('userdata'))[0].email;
    this.registerService.getData(`assign-request?id=${this.userId}`).subscribe(data =>{
       this.list = data;
    },err =>{
      alert(err.error.err);
    })
  }

  details(data){
    this.registerService.request_details = data;
    this.route.navigate(['/executor/request-details'])

  }
}
