import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  role = '3';
  registrationForm: FormGroup;
  submitted = false
  get f() { return this.registrationForm.controls; }

  constructor(private router:Router,private formBuilder: FormBuilder, private registerService:RegisterService) { }
  ngOnInit() {
     
    this.registrationForm = this.formBuilder.group({
            role: ["", Validators.required], 
            fullName: ["", Validators.required], 
            email: ["", [Validators.required, Validators.email]], 
            password: ["", [Validators.required]],
           ngo_name : ["",  ],
            mobile_no : ["", [Validators.required, Validators.minLength(10)]],
            address : ["", [Validators.required]],
            year_establishment: ["", [ Validators.minLength(4)]],
            active_acc: [true, ''],
            ngo_executor: ['','']
          });
  }
  public register():void{
    this.submitted = true;
    if (this.registrationForm.valid) {
            if(this.role == '2'){
                this.registrationForm.value.active_acc = false;
              }
            this.registerService.postdata('register', this.registrationForm.value).subscribe(data =>{
              alert(data.msg);
              this.router.navigate(['/login']);
            },err =>{
              console.log(err);
              alert(err.error.err);
            })
          
          }
  }

  public keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  public rolechange(){
    this.registrationForm.get('fullName').clearValidators();
    this.registrationForm.get('year_establishment').clearValidators();
    this.registrationForm.get('ngo_name').clearValidators();
    if(this.role == '2'){
      this.registrationForm.get('ngo_name').setValidators([Validators.required]);
      this.registrationForm.get('year_establishment').setValidators([Validators.required]);

    }else{
      this.registrationForm.get('fullName').setValidators([Validators.required]);

    }
    this.registrationForm.get('fullName').updateValueAndValidity()

    this.registrationForm.get('ngo_name').updateValueAndValidity();
    this.registrationForm.get('year_establishment').updateValueAndValidity()
    
  }

}
