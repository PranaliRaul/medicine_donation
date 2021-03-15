import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-medicine-donation-detail',
  templateUrl: './medicine-donation-detail.component.html',
  styleUrls: ['./medicine-donation-detail.component.scss']
})
export class MedicineDonationDetailComponent implements OnInit {
  donation_details;
  userId;
  list;
  assignexecutive ;
  email;
  constructor(private servive:RegisterService, private route:Router) { }
  type = ['',"Tablet",'Capsule','Syrup']
  ngOnInit() {
    this.donation_details = this.servive.donator_details;
    if(!this.donation_details){
      this.route.navigate(['/ngo/medicine-donation']);
      return;
    }
    this.email = this.donation_details.excutor_email;

    this.fetchexecutor();
    
  }

  fetchexecutor(){
    this.userId = JSON.parse(localStorage.getItem('userdata'))[0].email;
    this.servive.getData(`executor-list?id=${this.userId}`).subscribe(data =>{
       this.list = data.filter(data => data.active_acc);
    },err =>{ 
      alert(err.error.err);
    })
  
  }
  assignexecutor(){
    if(this.assignexecutive){
    this.donation_details.excutor_email =this.assignexecutive.email;
    this.donation_details.assign_executor =this.assignexecutive.fullName;
    }
    this.servive.postdata(`assign-executor`, this.donation_details).subscribe(data =>{
       
       this.route.navigate(['/ngo/medicine-donation']);
       alert(data.msg);
    },err =>{ 
      alert(err.error.err);
    })
  
  }
  assignexe(value){
    this.assignexecutive = this.list.find(ele => ele.email === value);
  }
}
