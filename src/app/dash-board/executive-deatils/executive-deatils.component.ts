import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-executive-deatils',
  templateUrl: './executive-deatils.component.html',
  styleUrls: ['./executive-deatils.component.scss']
})
export class ExecutiveDeatilsComponent implements OnInit {

  ngo_details:any;
  constructor(private servive:RegisterService, private route:Router) { }

  ngOnInit() {
    this.ngo_details = this.servive.donator_details;
    if(!this.ngo_details){
      this.route.navigate(['/home/donor']);
    }
  }
  activeAcc(active){
    if(confirm("Are You Sure ")){
    this.ngo_details.active_acc = active;
    this.servive.postdata('update-ngo', this.ngo_details ).subscribe(data =>{
      alert("Updated Sucessfully");
      this.route.navigate(['/home/ngo/ngo-executive-list']);
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
