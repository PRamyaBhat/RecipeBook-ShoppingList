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

  // template: `
  //  <app-server></app-server>
  //  Hello there with line template
  //  <app-server></app-server>`,
   //Style urls is an array we could reference multiple external style sheets here so you could add pointers
   // to otherstyle sheets
   templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
   

  //we could use another property, which take s array of strings. use back ticks.put this in app.component.ts
  // styles:[`
  // h3 {
  //  color: red 
  // }
  // `]
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = 'No server is created ';
serverName = '' ; 
constructor() {
    setTimeout(()=>{
      this.allowNewServer= true;
    },2000);
   }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStatus = 'Server is created';
  }
  onUpdateServerName(event:Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
    //If it is of type event .Because the target is of type input element.This is why my IDE dont like it.We
    //can explicitly inform it about the type in Typescript by adding HTML input element here.It is just to inform
    //typescfript that we know that the type of the HTML element of this event will be an HTML input element.
    //We do tis explicit casting with this syntax,with the opening and closing tag, with the smaller and
    //greater than sign and the type in between.
  }
  // onUpdateServerName(event:any){
  //   this.serverName = event.target.value;
  //   //console.log(event);
  //   // outputs no of character you entered as 4 keystrokes. so input events fired four times

  // }

}
