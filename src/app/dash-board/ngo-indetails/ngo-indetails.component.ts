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
list = []
  constructor(private servive:RegisterService, private route:Router) { }

  ngOnInit() {
    this.ngo_details = this.servive.ngo_details;
    if(!this.ngo_details){
      this.route.navigate(['/home/ngo-request']);
      return;
    }

    console.log(this.ngo_details );
  }

    activeAcc(active){
    if(confirm("Are You Sure ")){
    this.ngo_details.active_acc = active;
    this.servive.postdata('update-ngo', this.ngo_details ).subscribe(data =>{
      alert("Updated Sucessfully");
      this.route.navigate(['/home/ngo-request']);
    },err =>{
      console.log(err);
      alert(err.error.err);
    })
  }
  }

public navigate(url){
  this.route.navigate([url]);
}

}
