import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements ICellRendererAngularComp {

  constructor() { }

  public params:any;
  agInit(params): void {
    this.params = params;
   
  }

  refresh(params?: any): boolean {
    return true;
  }


}
