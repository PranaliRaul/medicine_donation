import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-executive-list',
  templateUrl: './executive-list.component.html',
  styleUrls: ['./executive-list.component.scss']
})
export class ExecutiveListComponent implements OnInit {
  public ngo_details:any;
  public list = []
  constructor(public servive:RegisterService, private route:Router) { }

  ngOnInit() {
    this.ngo_details = this.servive.ngo_details;
    if(!this.ngo_details){
      this.route.navigate(['/home/ngo']);
      return;
    }
    this.listofexecutive();

  }
  private listofexecutive(){
    this.servive.getData(`executor-list?id=${this.ngo_details.email}`).subscribe(data =>{
      this.list = data;
    },err =>{
      console.log(err);
      alert(err.error.err);
    })
  }
}
