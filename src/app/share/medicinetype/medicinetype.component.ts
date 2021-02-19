import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-medicinetype',
  templateUrl: './medicinetype.component.html',
  styleUrls: ['./medicinetype.component.scss']
})
export class MedicinetypeComponent implements ICellRendererAngularComp {
  type = ['',"Tablet",'Capsule','Syrup']

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
