import { Component } from '@angular/core';
import { User } from '../models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  allow: Boolean;
  constructor(){
    this.allow = User;
  }

}
