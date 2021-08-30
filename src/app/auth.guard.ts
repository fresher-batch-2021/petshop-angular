import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router){}
  getGuard(key:string){
    let guard = localStorage.getItem(key);
    return guard;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userStr = localStorage.getItem("LOGGED_IN_USER")
    if(userStr==null){
      this.route.navigate(['/login']);
    }else{
      let user = JSON.parse(userStr);      
      if(user.role=="ADMIN"){
        return true;
      }
      else{
        alert("You are not authorized to access Admin Portal");            
        this.route.navigate(['/login']);
      }        
  }
  return false;

}

}
