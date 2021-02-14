import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements ICellRendererAngularComp {

  constructor() { }

  params;
  label: string;

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
   
  }

  refresh(params?: any): boolean {
    return true;
  }


}
