import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  message:string;
  
@ViewChild('content') content:ElementRef
  constructor(config: NgbModalConfig, private modalService: NgbModal, private registerService:RegisterService) {
    config.backdrop =  'static';
    config.keyboard = false;
   }

  ngOnInit() {
    this.registerService.getMessage().subscribe(message => {  
      this.modalService.open(this.content,{ centered: true }); 
      this.message = message
  }); 
  }
 
}
