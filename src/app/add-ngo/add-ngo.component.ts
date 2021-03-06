import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-add-ngo',
  templateUrl: './add-ngo.component.html',
  styleUrls: ['./add-ngo.component.scss']
})
export class AddNgoComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  get f() { return this.registrationForm.controls; }

  constructor(private router:Router,private formBuilder: FormBuilder, private registerService:RegisterService) { }
  ngOnInit() {
     
    this.registrationForm = this.formBuilder.group({
            role: [2, ''], 
            fullName: ["",], 
            email: ["", [Validators.required, Validators.email]], 
            password: ["", [Validators.required,Validators.minLength(6)]],
           ngo_name : ["",  Validators.required],
            mobile_no : ["", [Validators.required, Validators.pattern('[7-9]\\d{9}')]],
            address : ["", [Validators.required,Validators.minLength(15)]],
            year_establishment: ["", [ Validators.minLength(4),Validators.required,Validators.max(new Date().getFullYear())]],
            active_acc: [true, ],
            ngo_executor: ['','']
          });
  }
  public register():void{
    this.submitted =true;
    if (this.registrationForm.valid) {
            this.registerService.postdata('register', this.registrationForm.value).subscribe(data =>{
              alert(data.msg);
              this.router.navigate(['/login']);
            },err =>{
              console.log(err);
              alert(err.error.err);
            })
          
          }
  }
    validateForm(value){ 
    //   value = +value
    // if(!/^[0-9]+$/.test(value)){
    //   return false
    // }
    // return true;
  
  }
  public keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode); 
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
