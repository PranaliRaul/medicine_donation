import { animate, style, transition, trigger, } from '@angular/animations';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output, Input ,EventEmitter} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
 
})
export class PopUpComponent implements OnInit {
  message:any;
  
@ViewChild('content', { static: false }) content:ElementRef
  constructor(config: NgbModalConfig, private modalService: NgbModal, private registerService:RegisterService) {
    config.backdrop =  'static';
    config.keyboard = false;
   }
 
  ngOnInit() {
    this.registerService.getMessage().subscribe(message => {  
    //  this.modalService.open(this.content,{ centered: true }); 
      this.message = message;
      console.log(this.message)
  }); 
  }
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
 

  close() {
    this.message.yesFn()
    this.visible = false;
    this.message = null;
    this.visibleChange.emit(this.visible);
  }
 
}
