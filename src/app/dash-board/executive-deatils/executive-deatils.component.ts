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
  public active_acc:boolean;
  app_navbar: boolean;
  url: string;
  url2: string;
  constructor(private servive:RegisterService, private route:Router) { }

  ngOnInit() {
    this.ngo_details = this.servive.donator_details;
    if(this.route.url === '/ngo/ngo-executive-list/ngo-executive-deatails'){
      this.app_navbar = true;
      this.url2 ='/ngo/ngo-executive-list/ngo-executive-assign-donation';
      this.url = '/ngo/ngo-executive-list/ngo-executive-assign-request';
    }  else{
      this.url ='/home/ngo/executive-assign-donation';
      this.url2 = '/home/ngo/executive-donation'
    }
    if(!this.ngo_details){
      this.route.navigate([  this.app_navbar  ? 'ngo/ngo-executive-list':'/home/donor']);
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
    this.servive.postdata(url , this.ngo_details ).subscribe(data =>{
     alert(data.msg)
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
