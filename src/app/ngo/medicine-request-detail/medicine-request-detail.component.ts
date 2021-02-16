import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-medicine-request-detail',
  templateUrl: './medicine-request-detail.component.html',
  styleUrls: ['./medicine-request-detail.component.scss']
})
export class MedicineRequestDetailComponent implements OnInit {

  donation_details;
  userId;
  list;
  assignexecutive;
  email;
  medicinelist = [];
  selected_medicine: any;
  assignmedicine: any;
  selected_medicineshow:any;
  disabled =true
  constructor(private servive: RegisterService, private route: Router) { }
  type = ['', "Tablet", 'Capsule', 'Syrup']
  ngOnInit() {
    this.donation_details = this.servive.request_details;
    if (!this.donation_details) {
      this.route.navigate(['/ngo/medicine-donation']);
      return;
    }
    console.log(this.donation_details)
    this.email = this.donation_details.excutor_email;
    this.selected_medicine = this.donation_details.donation_id;
   
    if (this.donation_details.donation_id) {
      this.setmedicine();
    }
    this.fetchexecutor();
    this.getngolist();
  }

  fetchexecutor() {
    this.userId = JSON.parse(localStorage.getItem('userdata'))[0].email;
    this.servive.getData(`executor-list?id=${this.userId}`).subscribe(data => {
      this.list = data;
    }, err => {
      alert(err.error.err);
    })

  } 
  assignexecutor() {
    if (this.assignexecutive) {
      this.donation_details.excutor_email = this.assignexecutive.email;
      this.donation_details.assign_executor = this.assignexecutive.fullName;
    }
    if (this.assignmedicine) {
      this.donation_details.assign = this.assignmedicine.donator_name;
      this.donation_details.donation_id = this.assignmedicine.donation_id;
      this.donation_details.allow_status = 1;
      const qwt = this.assignmedicine.quantity - this.donation_details.quantity;
      this.donation_details.is_deliver = 0;
      
      qwt > 0 ? this.donation_details.remaining_quantity = qwt : this.donation_details.remaining_quantity = 0;
    }
    if (!this.assignmedicine && !this.donation_details.donation_id) {
      alert('Please select medicine ')
      return;
    }
    if (!this.assignexecutive) {
      alert('Please assign executor')
      return;
    }

     this.servive.postdata(`assign-executor-request`, this.donation_details).subscribe(data => {
    this.list = data;
     this.route.navigate(['/ngo/medicine-donation']);
      alert(data.msg);
    }, err => {
      alert(err.error.err);
    })

  }
  assignexe(value) {
    this.assignexecutive = this.list.find(ele => ele.email === value);
  }
  public getngolist(): void {
    this.disabled = false;
    this.userId = JSON.parse(localStorage.getItem('userdata'))[0].email;
    this.servive.getData(`ngo-donation?id=${this.userId}`).subscribe(data => {
      if(this.donation_details.donation_id){
        this.selected_medicineshow = data.find(ele => ele.donation_id == this.selected_medicine)
      }
      this.medicinelist = data.filter(ele => ele.is_collected && ele.quantity > 0);
      
      if(this.medicinelist.length === 0) {
        this.disabled =true;
        alert('Currently there is no donated medicine available')
       } 
    }, err => {
      alert(err.error.err);
    })
  }
  setmedicine() {
    this.assignmedicine = this.medicinelist.find(ele => ele.donation_id == this.selected_medicine);
    this.selected_medicineshow =  this.assignmedicine
  }
}
