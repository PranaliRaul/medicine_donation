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
  userId:any;
  constructor(private router:Router,private formBuilder: FormBuilder, private registerService:RegisterService) {
    this.userId = JSON.parse(localStorage.getItem('userdata'));
  }
  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
          brand_name: ["", Validators.required],
          generic_name: ["",Validators.required],
          ngo_name: ["", [Validators.required, ]],
          medicine_type: ["", [Validators.required]],
           quantity : ["",  Validators.required],
           exp_date:['', Validators.required],
           assign:['',  ''],
           allow_status:[0  ,''],
           assign_executor:['',  ''],
           personId:[this.userId[0].personId,  ''],
           mobile_no:[this.userId[0].mobile_no,''],
           donator_name:[this.userId[0].fullName,''],
           donator_address:[this.userId[0].address,'']
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
    console.log( this.registrationForm.value)
    this.registerService.postdata('donator',this.registrationForm.value).subscribe(data =>{
      // this.list = data
      console.log(data);
      alert(data.msg);
    },err =>{
      alert(err.error.err);
    })
  }
}
