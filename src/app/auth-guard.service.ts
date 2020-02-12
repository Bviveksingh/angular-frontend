import { AuthService } from './auth.service';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth_service:AuthService, private router:Router) { }

  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if(this.auth_service.is_logged_in()) return true
    
    this.router.navigate(['/login']);
    return false;
  }
}
