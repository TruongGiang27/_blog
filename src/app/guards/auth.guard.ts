import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:Auth, private authServices: AuthService,private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return new Promise((resolve,reject)=> {
      onAuthStateChanged(this.auth,(user) => {
        if(user){
          this.authServices.currentUser = user;
          console.log(user)
          resolve(true);
        }
        else{
          console.log('no user')
          this.authServices.currentUser = null;
          resolve(false);
          this.router.navigate(['/login']);
        }
      })
     })
      
  }
  
}
