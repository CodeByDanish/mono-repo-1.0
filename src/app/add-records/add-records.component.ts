import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedLibService } from 'projects/shared-lib/src/public-api';
@Component({
  selector: 'app-add-records',
  templateUrl: './add-records.component.html',
  styleUrls: ['./add-records.component.css']
})
export class AddRecordsComponent {
  title = 'add-records';
  isLoader : Boolean; // loader for api call
  myForm!: NgForm;


  constructor(private service: SharedLibService){
    this.isLoader = false
  }

  onSubmit(data : any){
    this.isLoader = true;
    this.service.postData(data.value).subscribe((res :any)=>{
      this.isLoader = false;
      alert('User Name : '+res.body.name+' Successfully Added')
      data.reset()
    })
  }
}
