import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Data binding in action
//Root component 
export class AppComponent {
  name = 'Ramya bhat';
}
//It is good practice having the folder name equal our component name