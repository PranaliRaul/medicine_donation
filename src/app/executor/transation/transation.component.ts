import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';
import 'ag-grid-enterprise';
import { BtnComponent } from 'src/app/share/components/btn/btn.component';
import { DateComponent } from 'src/app/share/components/date/date.component';
import { CollectedstatusComponent } from 'src/app/share/components/collectedstatus/collectedstatus.component';
import { MedicinetypeComponent } from 'src/app/share/medicinetype/medicinetype.component';


@Component({
  selector: 'app-transation',
  templateUrl: './transation.component.html',
  styleUrls: ['./transation.component.scss']
})
export class TransationComponent implements OnInit {

  list =[];
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
  userId = JSON.parse(localStorage.getItem('userdata'))[0].email;

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
      { headerName: 'Donated Quantity', field: 'quantity', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Mobile Number', field: 'mobile_no', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Status', field: 'is_collected', sortable: true, filter: true , 
      suppressSizeToFit: true,cellRenderer:'status'},
   
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
  }
  public getngolist():void{
    this.registerService.getData(`assign-donation?id=${this.userId}`).subscribe(data =>{
      this.list = data.filter(ele => ele.is_collected);
      this.rowData =  this.list;
    },err =>{
      alert(err.error.err);
    })


}
details(data){
  this.registerService.donator_details = data;
  this.route.navigate(['/executor/donation-details'])

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
