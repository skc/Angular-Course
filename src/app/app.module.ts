import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor/editor.component';
import { ViewerComponent } from './components/viewer/viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
