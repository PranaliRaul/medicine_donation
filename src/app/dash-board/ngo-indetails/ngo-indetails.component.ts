import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-ngo-indetails',
  templateUrl: './ngo-indetails.component.html',
  styleUrls: ['./ngo-indetails.component.scss']
})
export class NgoIndetailsComponent implements OnInit {
ngo_details:any;
  constructor(private servive:RegisterService, private route:Router) { }

  ngOnInit() {
    this.ngo_details = this.servive.ngo_details;
    if(!this.ngo_details){
      this.route.navigate(['/home/ngo-request']);
    }
    console.log(this.ngo_details );
  }
  activeAcc(){
   
    this.servive.postdata('update-ngo', this.ngo_details ).subscribe(data =>{
      alert(data.msg);
      this.route.navigate(['/home/ngo-request']);
    },err =>{
      console.log(err);
      alert(err.error.err);
    })
  }
  delete(){
    if(confirm("Are you sure")){

    }
  }
}
