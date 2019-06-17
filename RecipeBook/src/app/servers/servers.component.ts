import { Component, OnInit } from '@angular/core';

@Component({
   // By element
    selector: 'app-servers',
   //By attribute
  // selector: '[app-servers]',
  //select By class
  // selector: '.app-servers',
  //dont wrap( set to next line when line is full )this line because it is not supportd in default
  // template: '<app-server></app-server><app-server></app-server>',
  // if i want multi line strings , if i want to add more html code in here
  // we can switch from normal string with single quote to using back ticks to use javascript template expression
  // to be able to write multi-line strings in between here now

  template: `
   <app-server></app-server>
   Hello there with line template
   <app-server></app-server>`,
   //Style urls is an array we could reference multiple external style sheets here so you could add pointers
   // to otherstyle sheets
  styleUrls: ['./servers.component.css']
   

  //we could use another property, which take s array of strings. use back ticks.put this in app.component.ts
  // styles:[`
  // h3 {
  //  color: red 
  // }
  // `]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
