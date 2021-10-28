import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private _cookie:CookieService , private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.sessionCookieCheck();
  }
  sessionCookieCheck():boolean {
    try{
      const token:boolean = this._cookie.check('token');
      if(token){
        return token;
      }else{
        this.router.navigate(['/','auth']);
        return false;
      }
    }catch(e){
      console.log('Error',e);
      return false;
    }
  }
  
}
