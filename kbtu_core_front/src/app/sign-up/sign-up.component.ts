import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupUsers: any[] = [];
  newUser: string;
  newPassword: string;

  signupObj: any = {
    username: '',
    password: '',
  };

  constructor() { 
    this.newUser = '';
    this.newPassword = '';

  }

  ngOnInit(): void {
    const savedUsers = localStorage.getItem('signupUsers');
    if (savedUsers) {
      this.signupUsers = JSON.parse(savedUsers);
    }
  }

  onSignup() {
    this.signupObj = {username: this.newUser, password: this.newPassword};
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    
  }
  
}
