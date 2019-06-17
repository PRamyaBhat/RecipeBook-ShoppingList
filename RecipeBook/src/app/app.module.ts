//For understanding of typescript.These are typescript features
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//these are .ts files without the extension the extension is added by the webpack which bundles our project 
//automatically
import { ServerComponent } from './server/server.component'
// For the understanding of the Angular
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //This tells the angular hey this is special component you should bootstrap the whole application with that component being the root component
  // So all other components we create will not be added to the index.html , there selectors will be added to
  //the app.component.html
  bootstrap: [AppComponent]
})
export class AppModule { }
