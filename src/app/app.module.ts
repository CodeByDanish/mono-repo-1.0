import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedLibModule } from 'projects/shared-lib/src/public-api';
import { UpdateRecordsComponent } from './update-records/update-records.component';
import { DeleteRecordsComponent } from './delete-records/delete-records.component';
@NgModule({
  declarations: [
    AppComponent,
    UpdateRecordsComponent,
    DeleteRecordsComponent,
  ],
  imports: [
    SharedLibModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
