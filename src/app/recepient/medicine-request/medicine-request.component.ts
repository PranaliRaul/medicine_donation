import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-medicine-request',
  templateUrl: './medicine-request.component.html',
  styleUrls: ['./medicine-request.component.scss']
})
export class MedicineRequestComponent implements OnInit {
  registrationForm:FormGroup
  constructor(private router:Router,private formBuilder: FormBuilder, private registerService:RegisterService) { }
  ngOnInit() {
     
    this.registrationForm = this.formBuilder.group({
          brand_name: ["", Validators.required], 
          generic_name: ["",Validators.required], 
          ngo_name: ["", [Validators.required ]], 
          quantity : ["",  Validators.required]
           });
  }
  // public register():void{
  //   if (this.registrationForm.valid) { 
  //           console.log(this.registrationForm.value);
  //           this.registerService.postdata('register', this.registrationForm.value).subscribe(data =>{
  //             console.log(data);
             
  //             this.router.navigate(['/login']);
  //           },err =>{
  //             console.log(err);
  //             alert(err.error.err);
  //           })
          
  //         }
  // }
  donate(){

  }
}

