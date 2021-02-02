import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {

  donation_details;
  userId;
  list;
  assignexecutive ;
  email;
  medicinelist = [];
  selected_medicine:any;
  assignmedicine:any;
  constructor(private servive:RegisterService, private route:Router) { }
  type = ['',"Tablet",'Capsule','Syrup']
  ngOnInit() {
    this.donation_details = this.servive.request_details;
    if(!this.donation_details){
      this.route.navigate(['/ngo/medicine-donation']);
      return;
    }


  }



  deliver(){
    if(confirm("Are You Sure")){
      this.donation_details.is_deliver = 1;

    this.servive.postdata(`assign-executor-request`, this.donation_details).subscribe(data =>{
      // this.list = data;
      this.route.navigate(['/ngo/medicine-donation']);
      alert(data.msg);
   },err =>{
     alert(err.error.err);
   })
  }
  }

}
