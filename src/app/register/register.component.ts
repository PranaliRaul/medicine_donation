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
  submitted = false;
  fieldTextType:boolean;
  get f() { return this.registrationForm.controls; }

  constructor(private router:Router,private formBuilder: FormBuilder, private registerService:RegisterService) { }
  ngOnInit() {
     
          this.registrationForm = this.formBuilder.group({
            role: ["", Validators.required], 
            fullName: ["", Validators.required], 
            email: ["", [Validators.required, Validators.email]], 
            password: ["", [Validators.required,Validators.minLength(6)]],
           ngo_name : ["",  ],
            mobile_no : ["", [Validators.required,Validators.pattern('[7-9]\\d{9}')]],
            address : ["", [Validators.required,Validators.minLength(15)]],
            year_establishment: ["", [ Validators.minLength(4)]],
            active_acc: [true, ''],
            ngo_executor: ['',''] ,
            filename: ['',''] 

          });
  }
  public register():void{
    this.submitted = true;
    if (this.registrationForm.valid) {
            if(this.role == '2'){
                this.registrationForm.value.active_acc = false;
                let fileExtension:string =   this.image.name.split('?')[0].split('.').pop();
                this.registrationForm.value.filename = this.registrationForm.value.email+'.'+fileExtension;
              }
            this.registerService.postdata('register', this.registrationForm.value).subscribe(data =>{
              this.modal(data.msg, true);
              this.uploadefile()
            },err =>{
              this.modal(err.error.err);
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
    this.registrationForm.get('filename').clearValidators();

    if(this.role == '2'){
      this.registrationForm.get('ngo_name').setValidators([Validators.required]);
      this.registrationForm.get('filename').setValidators([Validators.required]);
      this.registrationForm.get('year_establishment').setValidators([Validators.required,Validators.minLength(4),Validators.max(new Date().getFullYear())]);

    }else{
      this.registrationForm.get('fullName').setValidators([Validators.required]);

    }
    this.registrationForm.get('fullName').updateValueAndValidity();
    this.registrationForm.get('ngo_name').updateValueAndValidity();
    this.registrationForm.get('year_establishment').updateValueAndValidity() 
  }

  modal(msg,from?){
    this.registrationForm.value.donation_date = this.registerService.getdate();
      this.registerService.confirmThis(msg, () =>{  
        if(from){
          this.router.navigate(['/donator/my-donation'])

        }
      })  
  }
  image
  uplaode(event){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.image = file;
    }
  }
  public toggleFieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }
  public uploadefile(){
      const formdata = new FormData();
      let fileExtension:string =   this.image.name.split('?')[0].split('.').pop();
      formdata.append('file', this.image, this.registrationForm.value.email+'.'+fileExtension);
      this.registerService.postdata('upload',formdata).subscribe(data =>{
      },err =>{
      })
    }
   
    
}
