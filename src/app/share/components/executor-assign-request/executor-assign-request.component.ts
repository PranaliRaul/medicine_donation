import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from 'src/app/register/register.service';
import { Router } from '@angular/router';
import { BtnComponent } from '../btn/btn.component';
import { DeliveredstatusComponent } from '../deliveredstatus/deliveredstatus.component';

@Component({
  selector: 'app-executor-assign-request',
  templateUrl: './executor-assign-request.component.html',
  styleUrls: ['./executor-assign-request.component.scss']
})
export class ExecutorAssignRequestComponent implements OnInit {
  @Input('email') public email:String;
  @Input( ) public button:boolean;
  public list =[];
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
  private extracolumn = {
    headerName: '',
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
      onClick: this.onBtnClick1.bind(this),
      label: 'details' 

    } 
  }
  constructor(private registerService:RegisterService,private route:Router) { 
    
    this.frameworkComponents = {
      status: DeliveredstatusComponent,
      buttonRenderer:BtnComponent
    }
    this.columnDefs = [  
      { headerName: ' Recepient Name', field: 'recepient_name', sortable: true ,
       }, 
      { headerName: 'Brand Name', field: 'brand_name', sortable: true ,
       },  
       { headerName: 'Requested Quantity', field: 'quantity', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Obtained Quantity', field: 'obtain_quantity', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Mobile Number', field: 'mobile_no', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Status', field: 'is_deliver', sortable: true, filter: true , 
      suppressSizeToFit: true,cellRenderer:'status'},
      
     
      ]; 
   }
   onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
    this.registerService.request_details =  this.rowDataClicked1;
    this.route.navigate(['/executor/request-transation/request-details'])
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
    if(this.button){
      this.columnDefs.push(this.extracolumn)
    }
  }
  public getngolist():void{
    this.registerService.getData(`assign-request?id=${this.email}`).subscribe(data =>{
      this.list = data.filter(ele => ele.is_deliver);
      this.rowData = this.list;

    },err =>{
      alert(err.error.err);
    })

  }

  details(data){
    this.registerService.request_details = data;
    this.route.navigate(['/executor/request-details'])

  }
  
}
