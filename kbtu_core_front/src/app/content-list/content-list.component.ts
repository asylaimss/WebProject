import { Component } from '@angular/core';
import { contents } from 'contents';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  contents = [...contents];
}
