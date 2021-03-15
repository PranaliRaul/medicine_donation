import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


import { RegisterService } from '../register/register.service';
import { BtnComponent } from '../share/components/btn/btn.component';
import 'ag-grid-enterprise';
@Component({
  selector: 'app-ngo-request',
  templateUrl: './ngo-request.component.html',
  styleUrls: ['./ngo-request.component.scss']
})
export class NgoRequestComponent implements OnInit,OnDestroy {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private defaultColGroupDef;
  private columnTypes;
  private subscription:Subscription  = new Subscription()
  public rowData = [];
  public rowHeight = 50;
  public headerHeight = 50;
  public frameworkComponents: any;
  public rowDataClicked1
  public defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true,
  };
  constructor(private service: RegisterService, private route: Router) {
    this.frameworkComponents = {
      buttonRenderer: BtnComponent,
    }
    this.columnDefs = [
      {
        headerName: 'Ngo Name', field: 'ngo_name', sortable: true,
      },

      {
        headerName: 'Email Id', field: 'email', sortable: true, filter: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'Contact no', field: 'mobile_no', sortable: true, filter: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'Address', field: 'address', sortable: true, filter: true,
        suppressSizeToFit: true,
      },
      {
        headerName: 'Year of Establishment', field: 'year_establishment', sortable: true, filter: true,
        suppressSizeToFit: true,
      },
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
    this.service.ngo_details = this.rowDataClicked1;
    this.route.navigate(['/home/ngo-request/ngo-detail'])
  }
  

  ngOnInit() {
    this.getNgoList();
   
  }

  getNgoList() {
    const url = `ngo-requestactivate?id=2`;
    this.subscription.add(this.service.getData(url).subscribe(data => {
      this.rowData = data
    }))
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
  ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }
}
