import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-ngo-request',
  templateUrl: './ngo-request.component.html',
  styleUrls: ['./ngo-request.component.scss']
})
export class NgoRequestComponent implements OnInit {

  constructor(private service:RegisterService) { }
  list = []
  ngOnInit() {
    this.getNgoList();
  }

  getNgoList(){
    const url = `ngolist?id=2`;
    this.service.getData(url).subscribe(data =>{
      console.log(data);
      this.list = data;
    })
  }
  details(data){
    console.log(data)
  }
}
