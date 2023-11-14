import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SharedLibService } from 'projects/shared-lib/src/public-api';
import { of } from 'rxjs';

@Component({
  selector: 'app-client-app',
  templateUrl: './client-app.component.html',
  styleUrls: ['./client-app.component.css']
})
export class ClientAppComponent {
  @ViewChild('exampleModal') exampleModal!: ElementRef;

  employeeData: any;
  searchTerm: any = '';
  filteredItems$ : any
  sortOption: string = 'id';
  filterText = '';

  selectedRow: any = []; // To track the selected row for editing
  isSaveDisabled = false; // Initialize it to false

  constructor(private service: SharedLibService){
  }
  ngOnInit(): void {
    this.service.getData().subscribe((items) => {
      this.employeeData = items
      this.filteredItems$  = this.service.applySortAndFilter(items,this.sortOption,this.filterText);
    });
  }
  
  onSortChange() {
  this.filteredItems$ =  this.service.applySortAndFilter(this.employeeData,this.sortOption,this.filterText); 
  }

  onFilterChange() {
    this.filteredItems$ =  this.service.applySortAndFilter(this.employeeData,this.sortOption,this.filterText); 
    console.log(this.filteredItems$)
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
      this.filteredItems$ = of(this.employeeData)
    }
  }

  
}
