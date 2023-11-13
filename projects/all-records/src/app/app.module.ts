import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedLibModule } from 'projects/shared-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedLibModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
