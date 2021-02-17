import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';
import 'ag-grid-enterprise';
import { CollectedstatusComponent } from 'src/app/share/components/collectedstatus/collectedstatus.component';

@Component({
  selector: 'app-request-transation',
  templateUrl: './request-transation.component.html',
  styleUrls: ['./request-transation.component.scss']
})
export class RequestTransationComponent implements OnInit {

  list =[];
  userId:number;
  type = ['',"Tablet",'Capsule','Syrup']
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColGroupDef;
  private columnTypes; 
  rowData = [];
  rowHeight = 50;  
  headerHeight = 50;
  frameworkComponents: any;

  constructor(private registerService:RegisterService,private route:Router) { 
    this.frameworkComponents = {
      status:CollectedstatusComponent
    }
    this.columnDefs = [  
      { headerName: 'Name', field: 'recepient_name', sortable: true ,
       }, 
      { headerName: 'Brand Name', field: 'brand_name', sortable: true ,
       },  
      { headerName: 'Quantity', field: 'quantity', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Mobile Number', field: 'mobile_no', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Status', field: 'is_collected', sortable: true, filter: true , 
      suppressSizeToFit: true,cellRenderer:'status'},
      { headerName: 'Address', field: 'recepient_adress', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      {
        headerName: '',
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.onBtnClick1.bind(this),
          label: 'details'
  
        } 
      }
     
      ]; 
   }
   onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
    this.registerService.request_details =  this.rowDataClicked1;
    console.log(this.registerService.request_details)
    this.route.navigate(['/executor/request-details'])
  }
  rowDataClicked1
  defaultColDef = { 
  
  
    //filter: 'agTextColumnFilter',
    // floatingFilter: true, 
    resizable: true,
    sortable: true,
    filter: true,
  };


  ngOnInit() {
    this.getngolist();
  }
  public getngolist():void{
    this.userId = JSON.parse(localStorage.getItem('userdata'))[0].email;
    this.registerService.getData(`assign-request?id=${this.userId}`).subscribe(data =>{
       this.list = data;
    },err =>{
      alert(err.error.err);
    })
  }

  details(data){
    this.registerService.request_details = data;
    this.route.navigate(['/executor/request-details'])

  }

}
