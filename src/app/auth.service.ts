import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private login_url:string = 'http://localhost:5000/login';
  constructor(private http:HttpClient, private jwtHelper:JwtHelperService,private router:Router) { }

  login(credentials:Object){
    return this.http.post(this.login_url, credentials);
  }

  is_logged_in(){
    const token = localStorage.getItem('auth_token');
    if(!token) return false

    const is_expired = this.jwtHelper.isTokenExpired(token);

    return !is_expired;
  }

  logout(){
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }
}
