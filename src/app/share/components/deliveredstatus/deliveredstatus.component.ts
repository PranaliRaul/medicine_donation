import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-deliveredstatus',
  templateUrl: './deliveredstatus.component.html',
  styleUrls: ['./deliveredstatus.component.scss']
})
export class DeliveredstatusComponent implements ICellRendererAngularComp {

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
