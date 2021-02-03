import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-bef-person',
  templateUrl: './bef-person.component.html',
  styleUrls: ['./bef-person.component.scss']
})
export class BefPersonComponent implements OnInit {

  list =[];
  userId:number;
  type = ['',"Tablet",'Capsule','Syrup']

  constructor(public registerService:RegisterService,private route:Router) { }

  ngOnInit() {
    if(!this.registerService.donator_details){
      this.route.navigate(['/home/donor']);
      return;
    }
    this.getngolist();
  }
  public getngolist():void{
    this.userId =  this.registerService.donator_details.personId;
    this.registerService.getData(`mydonator?id=${this.userId}`).subscribe(data =>{
       this.list = data
    },err =>{
      alert(err.error.err);
    })


}

}