import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Authservice:AuthService,private router:Router) { }

  ngOnInit() {
  }
onLogin(username:string,password:string)
{
  let user:User =this.Authservice.authenticate(username,password)
  this.router.navigateByUrl('/')
}
}
