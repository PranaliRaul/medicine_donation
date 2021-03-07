import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-recepient-indetails',
  templateUrl: './recepient-indetails.component.html',
  styleUrls: ['./recepient-indetails.component.scss']
})
export class RecepientIndetailsComponent implements OnInit {

  ngo_details:any;
  user:any;
  public active_acc:boolean;
  public app_navbar = false;
  constructor(private servive:RegisterService, private route:Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userdata'));
    this.ngo_details = this.servive.donator_details;
    if(this.route.url === '/ngo/ngo-executive-deatails'){
      this.app_navbar = true;
    }
    if(!this.ngo_details){
      this.route.navigate(['/home/recepient']);
      return;
    }
    this.active_acc =this.ngo_details.active_acc;

  }
  activeAcc(active){
    if(confirm("Are You Sure ")){
    let url = 'update-ngo';
      if(this.ngo_details.roleId == 5 && this.ngo_details.active_acc){
        url ='executor-inactive';
      }
    this.ngo_details.active_acc = active;
    
    this.servive.postdata(url, this.ngo_details ).subscribe(data =>{
      alert(data.msg)
      this.route.navigate(['/home/recepient']);
    },err =>{
      alert(err.error.err);
    })
  } 
  }
public navigate(url){
  this.route.navigate([url])
}
}
