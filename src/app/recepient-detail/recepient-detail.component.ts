import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-recepient-detail',
  templateUrl: './recepient-detail.component.html',
  styleUrls: ['./recepient-detail.component.scss']
})
export class RecepientDetailComponent implements OnInit {
list =[]
  
  constructor(private service:RegisterService) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    const url = `ngolist?id=4`;
    this.service.getData(url).subscribe(data =>{
     this.list = data;
    })
  }
}
