import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  list =[];
  userId:number;
  type = ['',"Tablet",'Capsule','Syrup']

  constructor(private registerService:RegisterService,private route:Router) { }

 
  ngOnInit() {
    this.getngolist();
  }
  public getngolist():void{
    this.userId = JSON.parse(localStorage.getItem('userdata'))[0].email;
    this.registerService.getData(`ngo-donation?id=${this.userId}`).subscribe(data =>{
       this.list = data;
    },err =>{ 
      alert(err.error.err);
    })
  
  
}
details(data){
  this.registerService.donator_details = data;
  this.route.navigate(['/ngo/medicine-donation-details'])
}
}
