import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exector-assign-request',
  templateUrl: './exector-assign-request.component.html',
  styleUrls: ['./exector-assign-request.component.scss']
})
export class ExectorAssignRequestComponent implements OnInit {

  public ngo_details:any;
  constructor(private servive:RegisterService, private route:Router) { }

  ngOnInit() {
    this.ngo_details = this.servive.donator_details;
  }

}
