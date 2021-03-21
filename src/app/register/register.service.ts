import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import {  environment} from "src/environments/environment";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';  
import { Subject } from 'rxjs'; 
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

  public downloade(url,data):any{
    const url1 = `${environment.API_URL}${url}`;
    return this.http.post(url1,data,{responseType:'blob'});
  }
  public logout(){
    if(confirm('Are you sure')){
    localStorage.clear();
    this.route.navigate(['/login']);
    location.reload();
    }
  }
  public downloade2(url,data):any{
    return this.http.get(url,{responseType:'blob'});
  }
  public getdate(){
    const date = new Date();
    const month = date.getMonth() > 9 ? date.getMonth()+1 : `0${date.getMonth()+1 }`;
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate() }`;
    return `${date.getFullYear()}-${month}-${day}`;
  }
  private subject = new Subject<any>();  
  
  confirmThis(message: string, yesFn: () => void, noFn?: () => void): any {  
      this.setConfirmation(message, yesFn, noFn);  
  }  

  setConfirmation(message: string, yesFn: () => void, noFn: () => void): any {  
      const that = this;  
      this.subject.next({  
          type: 'confirm',  
          text: message,  
          yesFn(): any {  
                  that.subject.next(); // This will close the modal  
                  yesFn();  
              },  
          noFn(): any {  
              that.subject.next();  
              noFn();  
          }  
      });  
}
getMessage(): Observable<any> {  
  return this.subject.asObservable();  
} 
}