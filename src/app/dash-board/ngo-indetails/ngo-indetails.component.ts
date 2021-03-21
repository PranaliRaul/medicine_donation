import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';
import {  
    saveAs as importedSaveAs  
} from "file-saver"; 
@Component({
  selector: 'app-ngo-indetails',
  templateUrl: './ngo-indetails.component.html',
  styleUrls: ['./ngo-indetails.component.scss']
})
export class NgoIndetailsComponent implements OnInit {
ngo_details:any;
list = []
  constructor(private servive:RegisterService, private route:Router) { }

  ngOnInit() {
    this.ngo_details = this.servive.ngo_details;
    if(!this.ngo_details){
      this.route.navigate(['/home/ngo']);
      return;
    }

  }

    activeAcc(active){
    if(confirm("Are You Sure ")){
    this.ngo_details.active_acc = active;
    this.servive.postdata('update-ngo', this.ngo_details ).subscribe(data =>{
      alert("Updated Sucessfully");
       if(this.route.url.includes('ngo-request')){
        this.route.navigate(['/home/ngo-request']);
       }else{
        this.route.navigate(['/home/ngo']);
       }
    },err =>{
      console.log(err);
      alert(err.error.err);
    })
  }
  }

public navigate(url){
  this.route.navigate([url]);
}
public downloadefile(){
      
    this.servive.downloade('downloade',{filename:this.ngo_details.filename}).subscribe(data =>{
      this.downLoadFile(data,data.type ,this.ngo_details.filename);
    },err =>{
    })
 }
 downLoadFile(data: any, type: string ,na) {
  importedSaveAs(data, na); 
  // let blob = new Blob([data], { type: na});
  // let url = window.URL.createObjectURL(blob);
  // let pwa = window.open(url);
  // if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
  //     alert( 'Please disable your Pop-up blocker and try again.');
  // }
}
}
