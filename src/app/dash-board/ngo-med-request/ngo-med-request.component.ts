import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-ngo-med-request',
  templateUrl: './ngo-med-request.component.html',
  styleUrls: ['./ngo-med-request.component.scss']
})
export class NgoMedRequestComponent implements OnInit {

  public list =[];
  private userId:number;
  constructor(public registerService:RegisterService, private route:Router) { }


  ngOnInit() {
    if(! this.registerService.ngo_details){
      this.route.navigate(['/home/ngo-detail']);
      return;
    }
    this.getngolist();
  }
  public getngolist():void{
    this.userId =  this.registerService.ngo_details.email;
    this.registerService.getData(`ngo-request?name=${this.userId}`).subscribe(data =>{
       this.list = data;
    },err =>{
      alert(err.error.err);
    })

  }

}
