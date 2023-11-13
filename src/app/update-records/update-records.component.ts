import { Component } from '@angular/core';
import { SharedLibService } from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-update-records',
  templateUrl: './update-records.component.html',
  styleUrls: ['./update-records.component.css']
})
export class UpdateRecordsComponent {
  employeeData: any;
  selectedRow: any = []; // To track the selected row for editing
  isSaveDisabled = false; // Initialize it to false

  constructor(private service: SharedLibService){

  }

  ngOnInit(): void {
    this.service.getData().subscribe((items) => {
      this.employeeData = items
    });
  }
  editRow(row: any) {
    // Set the selected row for editing
    this.selectedRow = row;
  }
      // Method to save changes when editing is done
      saveChanges(data:any) {
        this.service.updateRowData(data).subscribe((result) => {
          alert('Row Updated Successfully')
          // Reset selectedRow to null to exit editing mode
          this.selectedRow = null;
        })
        
      }
    checkFieldsValidity() {
        // Check if any field is empty
        this.isSaveDisabled = this.employeeData.some((item : any) => !item.name || !item.email || !item.phone || !item.website);
      }
}
