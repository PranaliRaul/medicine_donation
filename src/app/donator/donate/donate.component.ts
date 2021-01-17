import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  registrationForm: FormGroup;
  list = [];
  constructor(private router:Router,private formBuilder: FormBuilder, private registerService:RegisterService) { }
  ngOnInit() { 
    this.registrationForm = this.formBuilder.group({
          brand_name: ["", Validators.required], 
          generic_name: ["",Validators.required], 
          ngo_name: ["", [Validators.required, ]], 
          type: ["", [Validators.required]],
           quantity : ["",  Validators.required],
           expire_date:['', Validators.required]
          });
          this.getngolist();
  }
  public getngolist():void{
   
            this.registerService.getData('ngolist?id=2').subscribe(data =>{
               this.list = data
            },err =>{ 
              alert(err.error.err);
            })
          
          
  }
  donate(){

  }
}
