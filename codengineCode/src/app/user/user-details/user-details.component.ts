import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { DepartmentComponent } from '../department/department.component';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  clickedRows = new Set<User>();
  userDetails: any;
  dataSource: any;
  displayedColumns: string[] = ['id', 'firstName', 'email','department.name','city','country'];

 constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog)  { 
 }

 ngOnInit(): void {
   this.userDetails = this.data['user details'];
   this.dataSource = new  MatTableDataSource([this.userDetails]);
   console.log(this.userDetails);
 }
 openDialog(){
  this.dialog.open(DepartmentComponent, {
    data: this.data
  });
}
}
