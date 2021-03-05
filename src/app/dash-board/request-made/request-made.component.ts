import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';
import 'ag-grid-enterprise';

import { DateComponent } from 'src/app/share/components/date/date.component';
import { DeliveredstatusComponent } from 'src/app/share/components/deliveredstatus/deliveredstatus.component';
import { BtnComponent } from 'src/app/share/components/btn/btn.component';



@Component({
  selector: 'app-request-made',
  templateUrl: './request-made.component.html',
  styleUrls: ['./request-made.component.scss']
})
export class RequestMadeComponent implements OnInit {

  list =[];
  userId:number;
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColGroupDef;
  private columnTypes; 
  rowData = [];
  rowHeight = 50;  
  headerHeight = 50;
  frameworkComponents: any;
  constructor( public registerService:RegisterService,private route:Router) {  this.frameworkComponents = {
    status:DeliveredstatusComponent,
    buttonRenderer:BtnComponent,
    DateComponent: DateComponent,
  }
  this.columnDefs = [  
    { headerName: 'Brand Name', field: 'brand_name', sortable: true, filter: true , 
    suppressSizeToFit: true},  
    { headerName: 'Generic Name', field: 'generic_name', sortable: true, filter: true , 
    suppressSizeToFit: true}, 
    { headerName: 'Ngo Name', field: 'ngo_name', sortable: true, filter: true , 
    suppressSizeToFit: true},
    { headerName: 'Quantity', field: 'quantity', sortable: true, filter: true , 
    suppressSizeToFit: true},
    { headerName: 'Status', field: 'is_collected', sortable: true, filter: true , 
    suppressSizeToFit: true,cellRenderer:'status'},
    { headerName: 'Assigned Executor', field: 'assign_executor', sortable: true, filter: true , 
     suppressSizeToFit: true,},
     { headerName: 'Request Date', field: 'request_date', sortable: true, filter: true , 
     cellRenderer: 'DateComponent',suppressSizeToFit: true, width:180},
    ];
}
defaultColDef = { 


  //filter: 'agTextColumnFilter',
  // floatingFilter: true,
  resizable: true,
  sortable: true,
  filter: true,
};

  ngOnInit() {
    if(!this.registerService.donator_details){
      this.route.navigate(['/home/recepient']);
      return;
    }
    this.getngolist();

  }
  public getngolist():void{
    this.userId = this.registerService.donator_details.personId;
    this.registerService.getData(`myrequest?id=${this.userId}`).subscribe(data =>{
       this.list = data
       this.rowData = data;
    },err =>{
      alert(err.error.err);
    })

  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
     
  }  
  @Input() ColumnDefs: any;  
  @Input() RowData: any;  
  @Input() IsColumnsToFit: boolean;  
  
  
  BindData(params) {  
    this.gridApi = params.api;  
    this.gridColumnApi = params.columnApi;  
    params.api.setRowData(this.RowData);  
    if (this.IsColumnsToFit) {  
      this.gridApi.sizeColumnsToFit();  
    }  
  }
  onBtnClick1(e){

  }
  
}
