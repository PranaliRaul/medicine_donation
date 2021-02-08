import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-donate-details',
  templateUrl: './donate-details.component.html',
  styleUrls: ['./donate-details.component.scss']
})
export class DonateDetailsComponent implements OnInit {

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
       this.list = data;
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
       // this.list = data;
       this.route.navigate(['/ngo/medicine-donation']);
       alert('Medicine collected sucessfully');
    },err =>{
      alert(err.error.err);
    })

  }
  assignexe(value){
    this.assignexecutive = this.list.find(ele => ele.email === value);
    console.log(this.assignexecutive);
  }
  collecte(){
    if(confirm('Are You Sure')){
    this.donation_details.is_collected = true;
    this.assignexecutor()
    }
  }
}
