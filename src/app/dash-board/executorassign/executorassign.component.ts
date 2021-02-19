import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-executorassign',
  templateUrl: './executorassign.component.html',
  styleUrls: ['./executorassign.component.scss']
})
export class ExecutorassignComponent implements OnInit {
  public ngo_details:any;
  constructor(private servive:RegisterService,  ) { }

  ngOnInit() {
    this.ngo_details = this.servive.donator_details;
  }

}
