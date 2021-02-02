import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-recepient-detail',
  templateUrl: './recepient-detail.component.html',
  styleUrls: ['./recepient-detail.component.scss']
})
export class RecepientDetailComponent implements OnInit {
list =[]

  constructor(private service:RegisterService,private route:Router) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    const url = `ngolist?id=4`;
    this.service.getData(url).subscribe(data =>{
     this.list = data;
    })
  }
  details(data){

    this.service.donator_details = data;
    this.route.navigate(['/home/recepient-in-detail'])
  }
  }

