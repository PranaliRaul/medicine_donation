import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/register/register.service';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  registrationForm: FormGroup;
  list = [];
  userId:any;
  name: any;
  mindate
  tipButtons
  submitted = false;
  constructor(private router:Router,private formBuilder: FormBuilder, public datepipe: DatePipe,
    private registerService:RegisterService) {
    this.userId = JSON.parse(localStorage.getItem('userdata'));
  }
  ngOnInit() {
    const date = new Date();
    const months = date.getMonth() >= 9 ? date.getMonth() + 1:`0${date.getMonth() +1}`;
    const day =  date.getDate() >= 9 ? date.getDate() + 1:`0${date.getDate() +1}`;
    this.mindate = `${date.getFullYear()}-${months}-${day}`;

    console.log(this.mindate)
    this.registrationForm = this.formBuilder.group({
          brand_name: ["", Validators.required],
          generic_name: ["",Validators.required],
          ngo_email: ["", [Validators.required, ]],
          medicine_type: ["", [Validators.required]],
           quantity : ["",  Validators.required],
           exp_date:['', Validators.required],
           assign:['',  ''],
           allow_status:[0  ,''],
           assign_executor:['',  ''],
           personId:[this.userId[0].personId,  ''],
           mobile_no:[this.userId[0].mobile_no,''],
           donator_name:[this.userId[0].fullName,''],
           donator_address:[this.userId[0].address,''],
           donator_email:[this.userId[0].email,''],
           ngo_name: ["", ],
          });
          this.getngolist();
  }
  get f() { return this.registrationForm.controls; }

  public getngolist():void{

            this.registerService.getData('ngolist?id=2').subscribe(data =>{
               this.list = data
            },err =>{
              alert(err.error.err);
            })


  }
  donate(){
    this.registrationForm.value.ngo_name = this.name;
    this.submitted = true;
    if(this.registrationForm.valid){
      const value = this.registrationForm.value.quantity
      if( value <=0 ){
          alert('quantity should be greater than zero');
        return;
      }
      this.registrationForm.value.donation_date = this.registerService.getdate()
    this.registerService.postdata('donator',this.registrationForm.value).subscribe(data =>{
      // this.list = data
      alert(data.msg);
      this.router.navigate(['/donator/my-donation'])
    },err =>{
      alert(err.error.err);
    })}else{
      alert('please fill all required field')
    }

  }
  selctngo(value){
    const ngo = this.list.find(ele =>ele.email === value);
    this.name = ngo.ngo_name;
    this.registrationForm.value.ngo_name = ngo.ngo_name;

  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}










