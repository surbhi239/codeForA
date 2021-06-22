import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
   department: any;
   dataSource: any;
   displayedColumns: string[] = ['department_id', 'name', 'role'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any)  { 
  }

  ngOnInit(): void {
    this.department = this.data['user details']['department'];
    this.dataSource = new  MatTableDataSource([this.department]);
    console.log(this.dataSource);
  }

}
