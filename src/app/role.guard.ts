import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  toastr: any;
  route: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let roleStr=localStorage.getItem("LOGGED_IN_USER");
      console.log(roleStr);
      let user=roleStr!=null?JSON.parse(roleStr):"";
    if(user.role=="ADMIN")    
    {      
      return true;
    }
    else
    {
      this.toastr.error("You are not authorized to access Admin Port");            
      this.route.navigate(['/login']);
      return false;
    }


  }
  
}
