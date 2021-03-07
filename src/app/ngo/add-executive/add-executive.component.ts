import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-add-executive',
  templateUrl: './add-executive.component.html',
  styleUrls: ['./add-executive.component.scss']
})
export class AddExecutiveComponent implements OnInit {
  registrationForm: FormGroup;
  role= '5';
  userId:string;
  submitted = false;
  get f() { return this.registrationForm.controls; }
  constructor(private router:Router,private formBuilder: FormBuilder, private registerService:RegisterService) { 
    this.userId = JSON.parse(localStorage.getItem('userdata'))[0].email;
  }
  ngOnInit() {
   
    this.registrationForm = this.formBuilder.group({
            role: ["", Validators.required], 
            fullName: ["",''], 
            email: ["", [Validators.required, Validators.email]], 
            password: ["", [Validators.required]],
           ngo_name : ["",  ],
            mobile_no : ["", [Validators.required, Validators.minLength(4)]],
            address : ["", [Validators.required]],
            year_establishment: ["", [ Validators.minLength(4)]],
            active_acc: [true, ],
            ngo_executor: [this.userId,'']
          });
  }
  public register():void{
  this.submitted = true;
    if (this.registrationForm.valid) { 
            this.registerService.postdata('register', this.registrationForm.value).subscribe(data =>{
             
             alert(data.msg)
            },err =>{
              console.log(err);
              alert(err.error.err);
            })
          
          }
  }
}
