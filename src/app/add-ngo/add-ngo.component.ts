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
  constructor(private router:Router,private formBuilder: FormBuilder, private registerService:RegisterService) { }
  ngOnInit() {
     
    this.registrationForm = this.formBuilder.group({
            role: [2, ''], 
            fullName: ["",], 
            email: ["", [Validators.required, Validators.email]], 
            password: ["", [Validators.required]],
           ngo_name : ["",  Validators.required],
            mobile_no : ["", [Validators.required, Validators.minLength(4)]],
            address : ["", [Validators.required]],
            year_establishment: ["", [ Validators.minLength(4),Validators.required]],
            active_acc: [true, ],
            ngo_executor: ['','']
          });
  }
  public register():void{
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
  

}
