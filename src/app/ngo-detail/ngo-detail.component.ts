import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';
import { BtnComponent } from '../share/components/btn/btn.component';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-ngo-detail',
  templateUrl: './ngo-detail.component.html',
  styleUrls: ['./ngo-detail.component.scss']
})
export class NgoDetailComponent implements OnInit {
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
    this.frameworkComponents = {
      buttonRenderer: BtnComponent,
    }
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
    this.service.ngo_details =   this.rowDataClicked1;
    this.route.navigate(['/home/ngo/ngo-detail'])
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
details(data){

  this.service.ngo_details = data;
  this.route.navigate(['/home/ngo/ngo-detail'])
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
