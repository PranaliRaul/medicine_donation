import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegisterService } from 'src/app/register/register.service';


@Component({
  selector: 'app-medicine-request',
  templateUrl: './medicine-request.component.html',
  styleUrls: ['./medicine-request.component.scss'],

})
export class MedicineRequestComponent implements OnInit {
  public registrationForm:FormGroup
  public list = [];
  private userId:any;
  private name:string;
  submitted = false;
  get f() { return this.registrationForm.controls; }
  constructor(private router:Router,private formBuilder: FormBuilder, private registerService:RegisterService) {
    this.userId = JSON.parse(localStorage.getItem('userdata'));
   
  }
  ngOnInit() {

    this.registrationForm = this.formBuilder.group({
          brand_name: ["", Validators.required],
          generic_name: ["",Validators.required],
          ngo_email: ["", [Validators.required ]],
          quantity : ["",  [Validators.required,Validators.min(1)]],
          personId:[this.userId[0].personId,  ''],
          mobile_no:[this.userId[0].mobile_no,''],
          assign:['',  ''],
          allow_status:[0  ,''], 
          assign_executor:['',  ''],
          recepient_adress:[this.userId[0].address,''],
          name:[this.userId[0].fullName,''],
          recepient_email:[this.userId[0].email,'']
           });

           this.getngolist();
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
  public getngolist():void{

    this.registerService.getData('ngolist?id=2').subscribe(data =>{
      this.list = data.filter(data => data.active_acc);
    },err =>{
      alert(err.error.err);
    })


}

  request(content){
  this.submitted = true;

    this.registrationForm.value.ngo_name = this.name;
    if(this.registrationForm.valid){
      this.registrationForm.value.request_date = this.registerService.getdate()
    this.registerService.postdata('recepient',this.registrationForm.value).subscribe(data =>{
      this.modal(data.msg, true);
    },err =>{
      this.modal(err.error.err);
    })}
  
  }
  selctngo(value){
    const ngo = this.list.find(ele =>ele.email === value);
    this.name = ngo.ngo_name;
    this.registrationForm.value.ngo_name = ngo.ngo_name;

  }

  modal(msg,from?){
    this.registrationForm.value.donation_date = this.registerService.getdate();
      this.registerService.confirmThis(msg, () =>{  
        if(from){
          this.router.navigate(['/donator/my-donation'])

        }
      })  
  }
  public keyPress(event: any) {
    const pattern = /[0-9 ]/; 
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}


