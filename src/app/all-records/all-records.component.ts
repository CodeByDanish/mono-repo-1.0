import { Component } from '@angular/core';
import { SharedLibService } from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-all-records',
  templateUrl: './all-records.component.html',
  styleUrls: ['./all-records.component.css']
})
export class AllRecordsComponent {
  employeeData : Array<any> = [];

  constructor(private service : SharedLibService) { }
  ngOnInit(): void {
    this.getAllData();
  }
   // fetch all records
   getAllData(){
    this.service.getData().subscribe((result:any) => {
      this.employeeData = result;
    })
  }
}
