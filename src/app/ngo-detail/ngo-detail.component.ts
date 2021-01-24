import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-ngo-detail',
  templateUrl: './ngo-detail.component.html',
  styleUrls: ['./ngo-detail.component.scss']
})
export class NgoDetailComponent implements OnInit {
  list = [];
  constructor(private service:RegisterService, private route:Router) { }

  ngOnInit() {
    this.getngolist(  )
  }
 
  public getngolist():void{
   
    this.service.getData('ngolist?id=2').subscribe(data =>{
       this.list = data
    },err =>{ 
      alert(err.error.err);
    })
  
  
}
details(data){
   
  this.service.ngo_details = data;
  this.route.navigate(['/home/ngo-activate'])
}
}
