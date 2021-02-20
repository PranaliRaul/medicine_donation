import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  private myIndex = 0;

  constructor() { }

  ngOnInit() {
    this.carousel();
  }
 
  
    private carousel() { 
    var x = document.getElementsByClassName("mySlides");
    for (let i = 0; i < x.length; i++) {
      x[i]['style'].display = "none";
    }
    this.myIndex++;
    if (this.myIndex > x.length) {  this.myIndex = 1}
    x[this.myIndex-1]['style'].display = "block";
    setTimeout( () =>this.carousel(), 3000);
  }
}

