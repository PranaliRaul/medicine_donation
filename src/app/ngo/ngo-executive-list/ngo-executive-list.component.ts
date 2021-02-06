import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngo-executive-list',
  templateUrl: './ngo-executive-list.component.html',
  styleUrls: ['./ngo-executive-list.component.scss']
})
export class NgoExecutiveListComponent implements OnInit {

  public ngo_details:any;
  public list = [];
  userId:string;
  constructor(public servive:RegisterService, private route:Router) { }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('userdata'))[0].email;
     
    this.listofexecutive();

  }
  private listofexecutive(){
    this.servive.getData(`executor-list?id=${this.userId}`).subscribe(data =>{
      this.list = data;
    },err =>{
      console.log(err);
      alert(err.error.err);
    })
  }
}
