import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  signupUsers: any[] = [];
  
  loginObj: any = {
    username: '',
    password: '',
  };
  
  constructor() { }

  ngOnInit(): void {

  }

  onLogin() {
    this.signupUsers.push(this.loginObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.loginObj = {
      username: '',
      password: '',
    };
  }
}