import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  list =[];
  userId:number;
  constructor(private registerService:RegisterService) { }

 
  ngOnInit() {
    this.getngolist();
  }
  public getngolist():void{
    this.userId = JSON.parse(localStorage.getItem('userdata'))[0].email;
    this.registerService.getData(`ngo-request?name=${this.userId}`).subscribe(data =>{
       this.list = data;
    },err =>{ 
      alert(err.error.err);
    })
  
  }
  details(){
  
  }
}
