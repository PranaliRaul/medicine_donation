import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, AfterViewInit {
  private classList:any;
  private nextElementSibling:any
  ngAfterViewInit(): void {
    const items = document.querySelectorAll(".accordion a");
    items.forEach(item => item.addEventListener('click', this.toggleAccordion));
  }

  constructor() { }

  ngOnInit() {
  }


 
  toggleAccordion(){
   

  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
 
}
