import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  signupUsers: any[] = [];

  loginObj: any = {
    username: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {
    const savedUsers = localStorage.getItem('signupUsers');
    if (savedUsers) {
      this.signupUsers = JSON.parse(savedUsers);
    }
  }

  onLogin() {
    // debugger
    const isUserExist = this.signupUsers.find(m => m.username == this.loginObj.username && m.password == this.loginObj.password);
    if(isUserExist != undefined){
      alert('Welcome!');
    } else{
      alert('Not Welcome!')
    }
  }
}
