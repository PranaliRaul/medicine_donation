import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-activateuser',
  templateUrl: './activateuser.component.html',
  styleUrls: ['./activateuser.component.scss']
})
export class ActivateuserComponent implements OnInit {
  private token:string;
  public loader = true;
  constructor(private router:Router,  private registerService:RegisterService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.token=this._Activatedroute.snapshot.paramMap.get("token");
    this.activateuser();
  }


  activateuser(){
    this.registerService.postdata('activate-user', {token:this.token}).subscribe(data =>{
      setTimeout(()=> this.modal(data.msg),5000)
     
    },err =>{
      this.modal(err.error.err);
    })
  }
  modal(msg){
    this.loader = false;
      this.registerService.confirmThis(msg, () =>{
          this.router.navigate(['/login']) 
      })  
  }
}
