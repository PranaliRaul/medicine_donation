import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';

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
  constructor(private service:RegisterService,private route:Router) { 
    this.columnDefs = [  
      { headerName: 'Name', field: 'fullName', sortable: true, filter: true  ,
      suppressSizeToFit: true,},  
      { headerName: 'Email Id', field: 'email', sortable: true, filter: true , 
      suppressSizeToFit: true},  
      { headerName: 'Contact no', field: 'mobile_no', sortable: true, filter: true , 
      suppressSizeToFit: true}, 
      { headerName: 'Address', field: 'address', sortable: true, filter: true , 
      suppressSizeToFit: true,},  
      // { headerName: 'Price', field: 'Price', sortable: true, filter: true ,  
      // suppressSizeToFit: true,},  
      // { headerName: 'BuyAccount', field: 'BuyAccount', sortable: true, filter: true ,  
      // suppressSizeToFit: true,}  
    ]; 
  }
  defaultColDef = { resizable: true };
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

  

