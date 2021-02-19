import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngo-medicine-request',
  templateUrl: './ngo-medicine-request.component.html',
  styleUrls: ['./ngo-medicine-request.component.scss']
})
export class NgoMedicineRequestComponent implements OnInit {

  public registrationForm:FormGroup
  public list = [];
  private userId:any;
  private name:string;
  public medicinelist = [];
  public selecedmedicine:any;
  public disabled = true;
  type = ['',"Tablet",'Capsule','Syrup']
  constructor(private router:Router,private formBuilder: FormBuilder, private registerService:RegisterService) {
    this.userId = JSON.parse(localStorage.getItem('userdata'));
  }
  ngOnInit() {

    this.registrationForm = this.formBuilder.group({
          brand_name: ["", ''],
          /// generic_name: ["",Validators.required],
           ngo_email: ["",  ''],
          quantity : ["",  Validators.required],
          personId:[this.userId[0].personId,  ''],
          mobile_no:[this.userId[0].mobile_no,''],
          assign:['',  ''],
          allow_status:[0  ,''],
          assign_executor:['',  ''],
          recepient_adress:[this.userId[0].address,''],
          recepient_name:[this.userId[0].fullName,''],
          recepient_email:[this.userId[0].email,''],
          ngo_name:['',''],
          is_deliver:[0,''],
          excutor_email:['','']
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

  request(){
    this.registrationForm.value.ngo_name = this.name;
    const medicinequantity =  this.registrationForm.value.quantity 
    if( medicinequantity&& medicinequantity >  this.selecedmedicine.quantity){
      alert('quantity should not be greater than selected medicine  available quantity');
      return ;
    }
    if(this.registrationForm.valid){
      const qwt= this.selecedmedicine.quantity - this.registrationForm.value.remaining_quantity 
      const data = {
        ...this.registrationForm.value,
        donation_id:this.selecedmedicine.donation_id,
        assign:this.selecedmedicine.donator_name,
        generic_name:this.selecedmedicine.generic_name,
        brand_name:this.selecedmedicine.brand_name,
        remaining_quantity:qwt >0 ? qwt:0
      }
    this.registerService.postdata('recepient-request',data).subscribe(data =>{
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
    this.registrationForm.value.ngo_email = ngo.email;

    this.getmedicine(ngo.email);
    this.disabled =false; 
  }
  public getmedicine(email):void{
    this.registerService.getData(`ngo-donation?id=${email}`).subscribe(data =>{
       this.medicinelist = data.filter(ele => ele.is_collected && ele.quantity > 0);
       if(this.medicinelist.length === 0) {
        this.disabled =true;
        alert('selected ngo doesn\'t have any donated medicine')
       } 
    },err =>{
      alert(err.error.err);
    })
  }

  seletedmedicine(i){
    this.selecedmedicine = this.medicinelist[i];
    this.registrationForm.value.brand_name = this.medicinelist[i].brand_name
  }
  checkqwt(value){
    const v = +value 
    if(v && v >  this.selecedmedicine.quantity){
      alert('quantity should not be greater than selected medicine  available quantity')
    }
  }
}
