import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';
import 'ag-grid-enterprise';
import { BtnComponent } from 'src/app/share/components/btn/btn.component';


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
  this.registerService.donator_details =  this.rowDataClicked1;
  console.log(this.registerService.donator_details)
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
    this.getngolist();
  }
  public getngolist():void{
    this.userId = JSON.parse(localStorage.getItem('userdata'))[0].email;
    this.registerService.getData(`ngo-donation?id=${this.userId}`).subscribe(data =>{
       this.list = data;
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
