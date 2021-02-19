import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';
import 'ag-grid-enterprise';
import { BtnComponent } from 'src/app/share/components/btn/btn.component';
import { CollectedstatusComponent } from 'src/app/share/components/collectedstatus/collectedstatus.component';
import { DateComponent } from 'src/app/share/components/date/date.component';
import { MedicinetypeComponent } from 'src/app/share/medicinetype/medicinetype.component';


@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

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
    status: CollectedstatusComponent,
    datepipe: DateComponent,
    medtype:MedicinetypeComponent
  }
  this.columnDefs = [  
    { headerName: 'Donor Name', field: 'donator_name', sortable: true ,
    width:150
     },  
    { headerName: 'Brand Name', field: 'brand_name', sortable: true ,
    width:150
     },  
    { headerName: 'Generic Name', field: 'generic_name', sortable: true, filter: true , 
    width:150,
    suppressSizeToFit: true},  
    { headerName: 'Medicine Type', field: 'medicine_type', sortable: true, filter: true , 
    width:150, suppressSizeToFit: true,cellRenderer:'medtype'}, 
    { headerName: 'Expiry Date', field: 'exp_date', sortable: true, filter: true , 
    cellRenderer: 'datepipe', width:150, suppressSizeToFit: true,},
    { headerName: 'Quantity', field: 'quantity', sortable: true, filter: true , 
    width:150,
    suppressSizeToFit: true,},
    { headerName: 'Benefited Person', field: 'assign', sortable: true, filter: true , 
    width:150,
    suppressSizeToFit: true,},
    { headerName: 'Status', field: 'is_collected', sortable: true, filter: true ,   width:150,  cellRenderer: 'status',
    suppressSizeToFit: true,},
    { headerName: 'Assigned Executor', field: 'assign_executor', sortable: true, filter: true ,   width:150,
    suppressSizeToFit: true,},
    {
      headerName: '',
      cellRenderer: 'buttonRenderer',
      width:100 ,
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'details'

      } 
    }
    ]; 
}
onBtnClick1(e) {
  this.rowDataClicked1 = e.rowData;
  this.registerService.donator_details =  this.rowDataClicked1;
  this.route.navigate(['/ngo/medicine-donation-details'])
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
    this.registerService.getData(`ngo-donation?id=${this.userId}`).subscribe(data =>{
       this.list = data;
       this.rowData = data
    },err =>{ 
      alert(err.error.err);
    })
  
  
}
details(data){
  this.registerService.donator_details = data;
  this.route.navigate(['/ngo/medicine-donation-details'])
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
