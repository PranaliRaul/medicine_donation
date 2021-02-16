import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';
import 'ag-grid-enterprise';
import { BtnComponent } from 'src/app/share/components/btn/btn.component';
import { CollectedstatusComponent } from 'src/app/share/components/collectedstatus/collectedstatus.component';
import { DateComponent } from 'ag-grid-community/dist/lib/components/framework/componentTypes';


@Component({
  selector: 'app-executive-list',
  templateUrl: './executive-list.component.html',
  styleUrls: ['./executive-list.component.scss']
})
export class ExecutiveListComponent implements OnInit {
  public ngo_details:any;
  public list = [];
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private defaultColGroupDef;
  private columnTypes; 
  rowData = [];
  rowHeight = 50;  
  headerHeight = 50;
  frameworkComponents: any;

  constructor(public servive:RegisterService, private route:Router) {
    this.frameworkComponents = { 
      buttonRenderer: BtnComponent,
      status: CollectedstatusComponent
     
    }
    this.columnDefs = [  
      { headerName: 'Name', field: 'fullName', sortable: true ,
       },  
      { headerName: 'Email Id', field: 'email', sortable: true, filter: true , 
      suppressSizeToFit: true},  
      { headerName: 'Mobile Number', field: 'mobile_no', sortable: true, filter: true , 
      suppressSizeToFit: true}, 
      { headerName: 'Address', field: 'address', sortable: true, filter: true , 
      suppressSizeToFit: true,},
      { headerName: '', field: '', sortable: true, filter: true , 
      suppressSizeToFit: true, cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'details'
      }
    },
      
      // {
      //   headerName: '',
      //   cellRenderer: 'buttonRenderer',
      //   cellRendererParams: {
      //     onClick: this.onBtnClick1.bind(this),
      //     label: 'details'
  
      //   } 
      // }
      ]; 
  }
  onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
    this.servive.donator_details =  this.rowDataClicked1;
    console.log(this.servive.donator_details)
    this.route.navigate(['home/ngo/executivedetails'])
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
    this.ngo_details = this.servive.ngo_details;
    if(!this.ngo_details){
      this.route.navigate(['/home/ngo']);
      return;
    }
    this.listofexecutive();

  }
  private listofexecutive(){
    this.servive.getData(`executor-list?id=${this.ngo_details.email}`).subscribe(data =>{
      this.list = data;
      this.rowData = data

    },err =>{
      console.log(err);
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
