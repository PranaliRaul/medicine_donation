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
  role= '5'
  constructor(private router:Router,private formBuilder: FormBuilder, private registerService:RegisterService) { }
  ngOnInit() {
   
    this.registrationForm = this.formBuilder.group({
            role: ["", Validators.required], 
            fullName: ["",''], 
            email: ["", [Validators.required, Validators.email]], 
            password: ["", [Validators.required]],
           ngo_name : ["",  ],
            mobile_no : ["", [Validators.required, Validators.minLength(4)]],
            address : ["", [Validators.required]],
            year_establishment: ["", [ Validators.minLength(4)]]
          });
  }
  public register():void{
    if (this.registrationForm.valid) { 
            console.log(this.registrationForm.value);
            this.registerService.postdata('register', this.registrationForm.value).subscribe(data =>{
              console.log(data);
             
              this.router.navigate(['/login']);
            },err =>{
              console.log(err);
              alert(err.error.err);
            })
          
          }
  }
}
