import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email:string;
  private password:string;
  private hide:true;
  constructor(private auth_service:AuthService,private router:Router) { }

  ngOnInit() {
  }
  
  submit_form(){
    let credentials = {
      email:this.email,
      password:this.password
    }
    this.auth_service.login(credentials).subscribe((response:any)=>{
      if(response.token){
        localStorage.setItem('auth_token', response.token);
        this.router.navigate(['/admin']);
      }
      
    })
  }

}
