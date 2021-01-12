import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  role = '3';
  constructor(private router:Router) { }

  ngOnInit() {
  }
  public register():void{
    this.router.navigate(['/login'])
  }
}
