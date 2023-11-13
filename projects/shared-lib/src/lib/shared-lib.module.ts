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
import { AddRecordsComponent } from 'src/app/add-records/add-records.component';

@NgModule({
  declarations: [
    SharedLibComponent,
    ClientAppComponent,
    AllRecordsComponent,
    UpdateRecordsComponent,
    DeleteRecordsComponent,
    AddRecordsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    AddRecordsComponent,
    DeleteRecordsComponent,
    SharedLibComponent,
    ClientAppComponent,
    AllRecordsComponent,
    UpdateRecordsComponent
  ]
})
export class SharedLibModule { }
