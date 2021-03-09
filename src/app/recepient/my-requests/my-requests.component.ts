import { Component, Input, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/register.service';
import 'ag-grid-enterprise';
import { BtnComponent } from 'src/app/share/components/btn/btn.component';
import { DeliveredstatusComponent } from 'src/app/share/components/deliveredstatus/deliveredstatus.component';
import { Router } from '@angular/router';
import { DateComponent } from 'src/app/share/components/date/date.component';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss']
})
export class MyRequestsComponent implements OnInit {
  list =[];
  userId:number;
  private gridApi;
  private gridColumnApi;
  paginationPageSize = 10;
  private columnDefs;
  private defaultColGroupDef;
  private columnTypes; 
  rowData = [];
  rowHeight = 50;  
  headerHeight = 50;
  frameworkComponents: any;

  constructor(private registerService:RegisterService , private route:Router) { 
    this.frameworkComponents = {
      status:DeliveredstatusComponent,
      date:DateComponent,
    }
    this.columnDefs = [  
      { headerName: 'Brand Name', field: 'brand_name', sortable: true ,
       },  
      { headerName: 'Generic Name', field: 'generic_name', sortable: true, filter: true , 
      suppressSizeToFit: true},  
      { headerName: 'Ngo Name', field: 'ngo_name', sortable: true, filter: true , 
      suppressSizeToFit: true}, 
      { headerName: 'Request Date', field: 'request_date', sortable: true, filter: true , 
      suppressSizeToFit: true,cellRenderer:'date'}, 
      { headerName: 'Requested Quantity', field: 'quantity', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Obtained Quantity', field: 'obtain_quantity', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Donor Name', field: 'assign', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Status', field: 'is_deliver', sortable: true, filter: true , 
      suppressSizeToFit: true,cellRenderer:'status'},
      { headerName: 'Assigned Executor', field: 'assign_executor', sortable: true, filter: true , 
      suppressSizeToFit: true,},
       
     
      ]; 
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
    this.userId = JSON.parse(localStorage.getItem('userdata'))[0].personId;
    this.registerService.getData(`myrequest?id=${this.userId}`).subscribe(data =>{
       this.list = data.filter(ele =>!ele.is_deliver);
       this.rowData =  this.list;
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

}
