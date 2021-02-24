import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import {  environment} from "src/environments/environment";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  ngo_details:any;
  donator_details:any;
  request_details:any;

  constructor(private http:HttpClient,private route:Router) { }

  public postdata(url,data):any{
    const url1 = `${environment.API_URL}${url}`;
    return this.http.post(url1,data);
  }

  public getData(url):any{
    const url1 = `${environment.API_URL}${url}`;
    return this.http.get(url1);
  }


  public logout(){
    if(confirm('Are you sure')){
    localStorage.clear();
    this.route.navigate(['/login']);
    }
  }
  public getdate(){
    const date = new Date();
    const month = date.getMonth() > 9 ? date.getMonth()+1 : `0${date.getMonth()+1 }`;
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate() }`;
    return `${date.getFullYear()}-${month}-${day}`
  }

}
