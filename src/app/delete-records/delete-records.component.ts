import { Component } from '@angular/core';
import { SharedLibService } from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-delete-records',
  templateUrl: './delete-records.component.html',
  styleUrls: ['./delete-records.component.css']
})
export class DeleteRecordsComponent {

  
  employeeData : Array<any> = [];
  constructor(private service: SharedLibService){
    this.getAllData();
  }

  // fetch all records
  getAllData(){
    this.service.getData().subscribe((result) => {
      this.employeeData =  result
    })
  }
  //alert box to confirmation
  confirmDeleteUser(user: any) {
    const isConfirmed = window.confirm(`Are you sure you want to delete ${user.name}?`);

    if (isConfirmed) {
      this.deleteRowUser(user);
    }
  }

  //delete the row data using api
  deleteRowUser(user : any){
    this.service.deleteRowData(user.id).subscribe((result) => {
      this.deleteUser(user);
      alert('Record successfully deleted. Click OK to remove the list')
    })
  }

  //remove the list 
  deleteUser(user: any) {
    const index = this.employeeData.indexOf(user);
    if (index !== -1) {
      this.employeeData.splice(index, 1);
    }
  }
}
