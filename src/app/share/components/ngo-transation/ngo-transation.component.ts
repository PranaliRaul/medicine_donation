import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
 import { DateComponent } from 'src/app/share/components/date/date.component';
import { RegisterService } from 'src/app/register/register.service';
import { MedicinetypeComponent } from '../../medicinetype/medicinetype.component';
import { BtnComponent } from '../btn/btn.component';
import { CollectedstatusComponent } from '../collectedstatus/collectedstatus.component';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-ngo-transation',
  templateUrl: './ngo-transation.component.html',
  styleUrls: ['./ngo-transation.component.scss']
})
export class NgoTransationComponent implements OnInit {
  @Input() email: string;  
  @Input() column: boolean;  

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
  private extracolumn = {
    headerName: '',
    cellRenderer: 'buttonRenderer',
    sortable: false, 
    filter: false ,
    cellRendererParams: {
      onClick: this.onBtnClick1.bind(this),
      label: 'details'

    } 
  }
  constructor(private registerService:RegisterService,private route:Router) { 
    this.frameworkComponents = {
      buttonRenderer: BtnComponent,
      date:DateComponent,
      status:CollectedstatusComponent,
      medtype:MedicinetypeComponent
    }

     
    this.columnDefs = [  
      { headerName: 'Name', field: 'donator_name', sortable: true ,
       }, 
      { headerName: 'Brand Name', field: 'brand_name', sortable: true ,
       },  
      // { headerName: 'Generic Name', field: 'generic_name', sortable: true, filter: true , 
      // suppressSizeToFit: true},   
      { headerName: 'Medicine Type', field: 'medicine_type', sortable: true, filter: true , 
      suppressSizeToFit: true,cellRenderer:'medtype'},
      { headerName: 'Expiry Date', field: 'exp_date', sortable: true, filter: true , 
      suppressSizeToFit: true,cellRenderer:'date'},
      { headerName: 'Quantity', field: 'quantity', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Mobile Number', field: 'mobile_no', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Status', field: 'is_collected', sortable: true, filter: true , 
      suppressSizeToFit: true,cellRenderer:'status'},
      // { headerName: 'Address', field: 'donator_address', sortable: true, filter: true , 
      // suppressSizeToFit: true,},
      
     
      ]; 
  }
  onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
    this.registerService.donator_details =  this.rowDataClicked1;
    this.route.navigate(['/executor/transaction/donation-details'])
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
    if(this.column){
    this.columnDefs.push(this.extracolumn)
    }
  }
  public getngolist():void{
    
    this.registerService.getData(`assign-donation?id=${this.email}`).subscribe(data =>{
      this.list = data.filter(ele => ele.is_collected);
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
