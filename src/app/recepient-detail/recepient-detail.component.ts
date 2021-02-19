import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';
import { BtnComponent } from '../share/components/btn/btn.component';
import 'ag-grid-enterprise';
@Component({
  selector: 'app-recepient-detail',
  templateUrl: './recepient-detail.component.html',
  styleUrls: ['./recepient-detail.component.scss']
})
export class RecepientDetailComponent implements OnInit {
list =[]
private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColGroupDef;
  private columnTypes; 
  rowData = [];
  rowHeight = 50;  
  headerHeight = 50;
  frameworkComponents: any;
  constructor(private service:RegisterService,private route:Router) { 
    this.frameworkComponents = {
      buttonRenderer: BtnComponent,
    }
    this.columnDefs = [  
      { headerName: 'Name', field: 'fullName', sortable: true ,
       },  
      { headerName: 'Email Id', field: 'email', sortable: true, filter: true , 
      suppressSizeToFit: true},  
      { headerName: 'Contact no', field: 'mobile_no', sortable: true, filter: true , 
      suppressSizeToFit: true}, 
      { headerName: 'Address', field: 'address', sortable: true, filter: true , 
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
    this.service.donator_details =  this.rowDataClicked1;
    this.route.navigate(['/home/recepient/recepient-detail'])
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
    this.getList();
  }

  getList(){
    const url = `ngolist?id=4`;
    this.service.getData(url).subscribe(data =>{
     this.list = data;
     this.rowData = data
    })
  }
  details(data){
    this.service.donator_details = data;
    this.route.navigate(['/home/recepient/recepient-detail'])
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

  

