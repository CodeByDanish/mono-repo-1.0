import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ClientAppComponent } from 'src/app/client-app/client-app.component';
import { AllRecordsComponent } from 'src/app/all-records/all-records.component';
import { UpdateRecordsComponent } from 'src/app/update-records/update-records.component';
import { DeleteRecordsComponent } from 'src/app/delete-records/delete-records.component';

@NgModule({
  declarations: [
    SharedLibComponent,
    ClientAppComponent,
    AllRecordsComponent,
    UpdateRecordsComponent,
    DeleteRecordsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    DeleteRecordsComponent,
    SharedLibComponent,
    ClientAppComponent,
    AllRecordsComponent,
    UpdateRecordsComponent
  ]
})
export class SharedLibModule { }
