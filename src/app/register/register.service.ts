import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import {  environment} from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  public postdata(url,data):any{
    const url1 = `${environment.API_URL}${url}`;
    return this.http.post(url1,data);
  }

  public getData(url):any{
    const url1 = `${environment.API_URL}${url}`;
    return this.http.get(url1);
  }
}
