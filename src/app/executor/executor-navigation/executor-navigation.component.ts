import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-executor-navigation',
  templateUrl: './executor-navigation.component.html',
  styleUrls: ['./executor-navigation.component.scss']
})
export class ExecutorNavigationComponent implements OnInit {

  constructor(private service:RegisterService) { }

  ngOnInit() {
  }
  logout(){
    this.service.logout();
  }
}
