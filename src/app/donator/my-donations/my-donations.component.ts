import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';
import { DateComponent } from 'src/app/share/components/date/date.component';
import 'ag-grid-enterprise';
import { BtnComponent } from 'src/app/share/components/btn/btn.component';
import { CollectedstatusComponent } from 'src/app/share/components/collectedstatus/collectedstatus.component';
import { MedicinetypeComponent } from 'src/app/share/medicinetype/medicinetype.component';

@Component({
  selector: 'app-my-donations',
  templateUrl: './my-donations.component.html',
  styleUrls: ['./my-donations.component.scss']
})
export class MyDonationsComponent implements OnInit {
  
  list =[];
  userId:number;
  type = ['',"Tablet",'Capsule','Syrup'];
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
      buttonRenderer: BtnComponent,
      status:CollectedstatusComponent,
      date:DateComponent,
      medtype:MedicinetypeComponent
    }
    this.columnDefs = [  
      { headerName: 'Brand Name', field: 'brand_name', sortable: true ,
       },  
      { headerName: 'Generic Name', field: 'generic_name', sortable: true, filter: true , 
      suppressSizeToFit: true},  
      { headerName: 'Ngo Name', field: 'ngo_name', sortable: true, filter: true , 
      suppressSizeToFit: true}, 
      { headerName: 'Medicine Type', field: 'medicine_type', sortable: true, filter: true,cellRenderer:'medtype' ,
      suppressSizeToFit: true,},
      { headerName: 'Expiry Date', field: 'exp_date', sortable: true, filter: true , 
      suppressSizeToFit: true,cellRenderer:'date'},
      { headerName: 'Quantity', field: 'quantity', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Benefited Person', field: 'assign', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Status', field: 'is_collected', sortable: true, filter: true , 
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
    this.registerService.getData(`mydonator?id=${this.userId}`).subscribe(data =>{
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
