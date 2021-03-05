import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';
import 'ag-grid-enterprise';
import { BtnComponent } from 'src/app/share/components/btn/btn.component';
import { DateComponent } from 'src/app/share/components/date/date.component';
import { MedicinetypeComponent } from 'src/app/share/medicinetype/medicinetype.component';
import { CollectedstatusComponent } from 'src/app/share/components/collectedstatus/collectedstatus.component';


@Component({
  selector: 'app-ngo-donation',
  templateUrl: './ngo-donation.component.html',
  styleUrls: ['./ngo-donation.component.scss']
})
export class NgoDonationComponent implements OnInit {
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
  
 

  constructor(public registerService:RegisterService,private route:Router) { 
    this.frameworkComponents = {
      DateComponent: DateComponent,
      medicinetype:MedicinetypeComponent,
      status:CollectedstatusComponent
    }
    this.columnDefs = [  
      { headerName: 'Donor Name', field: 'donator_name', sortable: true ,
       },  
      { headerName: 'Brand Name', field: 'brand_name', sortable: true, filter: true , 
      suppressSizeToFit: true},  
      { headerName: 'Generic Name', field: 'generic_name', sortable: true, filter: true , 
      suppressSizeToFit: true}, 
      { headerName: 'Medicine Type', field: 'medicine_type', sortable: true, filter: true , 
      suppressSizeToFit: true, cellRenderer:'medicinetype'},
      { headerName: 'Expiry Date', field: 'exp_date', sortable: true, filter: true , 
      cellRenderer: 'DateComponent',
      suppressSizeToFit: true,},
      { headerName: 'Donated Quantity', field: 'quantity', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Remaining Quantity', field: 'remaining_quantity', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Benefited Person', field: 'assign', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Status', field: 'is_collected', sortable: true, filter: true , 
      suppressSizeToFit: true,cellRenderer:'status'},
      { headerName: 'Assigned Executor', field: 'assign_executor', sortable: true, filter: true , 
      suppressSizeToFit: true,},
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
    if(! this.registerService.ngo_details){
      this.route.navigate(['/home/ngo']);
      return;
    }
    this.getngolist();
  }
  public getngolist():void{
    this.userId =  this.registerService.ngo_details.email;
    this.registerService.getData(`ngo-donation?id=${this.userId}`).subscribe(data =>{
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
