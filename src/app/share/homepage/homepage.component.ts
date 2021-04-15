import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { RegisterService } from 'src/app/register/register.service';
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
  private timeout;
  public counts:any
  
  constructor(private service:RegisterService) { }

  ngOnInit() {
    this.carousel();
    this.getallcount();
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



  getallcount(){
    this.service.getData('count').subscribe(data =>{
      this.counts = data
   },err =>{
     alert(err.error.err);
   })
 }


  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  } 
}
