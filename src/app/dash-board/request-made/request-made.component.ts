import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-request-made',
  templateUrl: './request-made.component.html',
  styleUrls: ['./request-made.component.scss']
})
export class RequestMadeComponent implements OnInit {

  list =[];
  userId:number;
  constructor( public registerService:RegisterService,private route:Router) { }

  ngOnInit() {
    this.getngolist();
    if(!this.registerService.donator_details){
      this.route.navigate(['/home/recepient-detail']);
      return;
    }
  }
  public getngolist():void{
    this.userId = this.registerService.donator_details.personId;
    this.registerService.getData(`myrequest?id=${this.userId}`).subscribe(data =>{
       this.list = data
    },err =>{
      alert(err.error.err);
    })

  }
}
