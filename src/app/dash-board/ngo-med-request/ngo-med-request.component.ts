import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';
import 'ag-grid-enterprise';
import { BtnComponent } from 'src/app/share/components/btn/btn.component';
import { DeliveredstatusComponent } from 'src/app/share/components/deliveredstatus/deliveredstatus.component';
import { DateComponent } from 'src/app/share/components/date/date.component';
@Component({
  selector: 'app-ngo-med-request',
  templateUrl: './ngo-med-request.component.html',
  styleUrls: ['./ngo-med-request.component.scss']
})
export class NgoMedRequestComponent implements OnInit {

  public list =[];
  private userId:number;

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColGroupDef;
  private columnTypes; 
  rowData = [];
  rowHeight = 50;  
  headerHeight = 50;
  frameworkComponents: any;

  constructor(public registerService:RegisterService, private route:Router) { 
    this.frameworkComponents = {
      buttonRenderer: BtnComponent,
      status:DeliveredstatusComponent,
      DateComponent: DateComponent,

    }
    this.columnDefs = [
      { headerName: 'Requestor Name', field: 'recepient_name', sortable: true ,
    },  
    { headerName: 'Requested Date', field: 'request_date', sortable: true, filter: true , 
    suppressSizeToFit: true,cellRenderer:'DateComponent'},  
      { headerName: 'Brand Name', field: 'brand_name', sortable: true ,
       },  
      { headerName: 'Generic Name', field: 'generic_name', sortable: true, filter: true , 
      suppressSizeToFit: true},  
      { headerName: 'Quantity', field: 'quantity', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Donor Name', field: 'assign', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Status', field: 'is_deliver', sortable: true, filter: true , 
      suppressSizeToFit: true,cellRenderer:'status'},
      { headerName: 'Assigned Executor', field: 'assign_executor', sortable: true, filter: true , 
      suppressSizeToFit: true,}
     
      ]; 
  }


  ngOnInit() {
    if(! this.registerService.ngo_details){
      this.route.navigate(['/home/ngo']);
      return;
    }
    this.getngolist();
  }
  public getngolist():void{
    this.userId =  this.registerService.ngo_details.email;
    this.registerService.getData(`ngo-request?name=${this.userId}`).subscribe(data =>{
       this.list = data;
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
}
