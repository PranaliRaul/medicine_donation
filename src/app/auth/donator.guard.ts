import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonatorGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    const userdata = JSON.parse(localStorage.getItem('userdata')); 
      const checkuser = state.url ==='/registered-ngo' &&  (userdata && userdata[0].roleId === 3 || userdata[0].roleId === 4 );
      if( userdata && userdata[0].roleId === 3 || checkuser){
        return true;
      }else{
        this.router.navigate(['/login'])
        return false;
      }
    } 
  
}
