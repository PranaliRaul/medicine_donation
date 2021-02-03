import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-ngo-request',
  templateUrl: './ngo-request.component.html',
  styleUrls: ['./ngo-request.component.scss']
})
export class NgoRequestComponent implements OnInit {

  constructor(private service:RegisterService,private route:Router) { }
  list = []
  ngOnInit() {
    this.getNgoList();
  }

  getNgoList(){
    const url = `ngo-requestactivate?id=2`;
    this.service.getData(url).subscribe(data =>{
      console.log(data);
      this.list = data;
    })
  }
  details(data){

    this.service.ngo_details = data;
    this.route.navigate(['/home/ngo-request/ngo-detail'])
  }
}
