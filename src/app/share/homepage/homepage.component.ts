import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class HomepageComponent implements OnInit,OnDestroy {

  private myIndex = 0;
  private timeout:any
  constructor() { }

  ngOnInit() {
    this.carousel();
  }
 
  
    private carousel() { 
    const x = document.getElementsByClassName("mySlides");
    
    for (let i = 0; i < x.length; i++) {
      x[i]['style'].display = "none";
    }
    this.myIndex++;
    if (this.myIndex > x.length) {  this.myIndex = 1}
    x[this.myIndex-1]['style'].display = "block";
    this.timeout = setTimeout( () =>this.carousel(), 3000);
  }
  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  } 
}

