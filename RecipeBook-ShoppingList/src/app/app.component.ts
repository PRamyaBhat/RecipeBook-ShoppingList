import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated,//None,native
})
export class AppComponent {
  servers = [];
  serverElements= [{type:'serve0r',name:'test server',content:'Just a test '}];
  onServerAdded(serverData: { serverName:string ,serverContent:string } ){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName : string , serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.serverContent
    });
  }
  // onAddServer(){
  //   this.servers.push('Another server');
  // }
  //
  // onRemoveServer(id:number){
  //   const position = id + 1;
  //   this.servers.splice(position,1);
  // }
}