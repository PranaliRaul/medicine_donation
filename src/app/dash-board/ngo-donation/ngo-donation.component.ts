import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-ngo-donation',
  templateUrl: './ngo-donation.component.html',
  styleUrls: ['./ngo-donation.component.scss']
})
export class NgoDonationComponent implements OnInit {

  list =[];
  userId:number;
  type = ['',"Tablet",'Capsule','Syrup']

  constructor(public registerService:RegisterService,private route:Router) { }


  ngOnInit() {
    if(! this.registerService.ngo_details){
      this.route.navigate(['/home/ngo']);
      return;
    }
    this.getngolist();
  }
  public getngolist():void{
    this.userId =  this.registerService.ngo_details.email;
    this.registerService.getData(`ngo-donation?id=${this.userId}`).subscribe(data =>{
       this.list = data;
    },err =>{
      alert(err.error.err);
    }) 


}

}
