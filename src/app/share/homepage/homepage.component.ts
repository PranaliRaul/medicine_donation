import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
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

