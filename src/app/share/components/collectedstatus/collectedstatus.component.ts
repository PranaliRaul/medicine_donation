import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-collectedstatus',
  templateUrl: './collectedstatus.component.html',
  styleUrls: ['./collectedstatus.component.scss']
})
export class CollectedstatusComponent implements ICellRendererAngularComp {

  constructor() { }

  params;
  label: string;

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
    console.log(  this.params )
  }

  refresh(params?: any): boolean {
    return true;
  }

}
