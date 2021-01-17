import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-donator-detail',
  templateUrl: './donator-detail.component.html',
  styleUrls: ['./donator-detail.component.scss']
})
export class DonatorDetailComponent implements OnInit {
  list =[]
  
  constructor(private service:RegisterService) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    const url = `ngolist?id=3`;
    this.service.getData(url).subscribe(data =>{
     this.list = data;
    })
  }

}
