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
  public registrationForm:FormGroup
  public list = [];
  private userId:any;
  private name:string;
  constructor(private router:Router,private formBuilder: FormBuilder, private registerService:RegisterService) {
    this.userId = JSON.parse(localStorage.getItem('userdata'));
  }
  ngOnInit() {

    this.registrationForm = this.formBuilder.group({
          brand_name: ["", Validators.required],
          generic_name: ["",Validators.required],
          ngo_email: ["", [Validators.required ]],
          quantity : ["",  Validators.required],
          personId:[this.userId[0].personId,  ''],
          mobile_no:[this.userId[0].mobile_no,''],
          assign:['',  ''],
          allow_status:[0  ,''],
          assign_executor:['',  ''],
          recepient_adress:[this.userId[0].address,''],
          name:[this.userId[0].fullName,'']
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
       this.list = data
    },err =>{
      alert(err.error.err);
    })


}

  request(){
    this.registrationForm.value.ngo_name = this.name;
    if(this.registrationForm.valid){
    this.registerService.postdata('recepient',this.registrationForm.value).subscribe(data =>{
      alert('Your medicine request has been sucessfully recorded');
      this.router.navigate(['/Recepient/my-request'])
    },err =>{
      alert(err.error.err);
    })
  }else{
    alert('please fill all required field')
  }
  }
  selctngo(value){
    const ngo = this.list.find(ele =>ele.email === value);
    this.name = ngo.ngo_name;
    this.registrationForm.value.ngo_name = ngo.ngo_name;

  }
}


