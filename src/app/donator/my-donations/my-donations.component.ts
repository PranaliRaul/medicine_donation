import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-my-donations',
  templateUrl: './my-donations.component.html',
  styleUrls: ['./my-donations.component.scss']
})
export class MyDonationsComponent implements OnInit {
  
  list =[];
  userId:number;
  constructor(private registerService:RegisterService) { }

  ngOnInit() {
    this.getngolist();
  }
  public getngolist():void{
    this.userId = JSON.parse(localStorage.getItem('userdata'))[0].personId;
    this.registerService.getData(`mydonator?id=${this.userId}`).subscribe(data =>{
       this.list = data
    },err =>{ 
      alert(err.error.err);
    })
  
  
}
}
