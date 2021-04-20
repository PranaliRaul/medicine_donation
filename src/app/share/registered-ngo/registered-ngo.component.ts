import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-registered-ngo',
  templateUrl: './registered-ngo.component.html',
  styleUrls: ['./registered-ngo.component.scss']
})
export class RegisteredNgoComponent implements OnInit {
  list = [];
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColGroupDef;
  private columnTypes; 
  rowData = [];
  rowHeight = 50;  
  headerHeight = 50;
  frameworkComponents: any;

  constructor(private service:RegisterService, private route:Router) {
    this.columnDefs = [  
      { headerName: 'Ngo Name', field: 'ngo_name', sortable: true ,
       },  
      { headerName: 'Email Id', field: 'email', sortable: true, filter: true , 
      suppressSizeToFit: true},  
      { headerName: 'Contact no', field: 'mobile_no', sortable: true, filter: true , 
      suppressSizeToFit: true}, 
      { headerName: 'Address', field: 'address', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: 'Year of Establishment', field: 'year_establishment', sortable: true, filter: true , 
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
    this.getngolist()
  }
  public getngolist():void{

    this.service.getData('ngolist?id=2').subscribe(data =>{
       this.list = data.filter(ele => ele.active_acc)
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
