import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AppService } from '../app.service';
import { User } from './user';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DepartmentComponent } from './department/department.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  hide = true;
  employee: FormGroup;
  loginPage = true;
  constructor(fb: FormBuilder,public appService: AppService,public dialog: MatDialog) { 
    this.employee = fb.group({
      email: ['', Validators.required],
      password: [],
        "firstName":[],
        "lastName":[],
        "age":[],
        "city":[],
        "country":[],
        "gender":[],
         "department": new FormGroup({
          role:new FormControl(''),
          "name": new FormControl('')
          })
    });
  }

  ngOnInit(): void {

  }

  registerUser(){
    this.appService.registerUser(this.employee.value).subscribe((user) =>{
      console.log(user);
    });
  }
  loginUser(){
    this.appService.loginUser(this.employee.value).subscribe((res) =>{
      if(res !== null){
        this.openDialog(res);
      }
    });
  }
  openDialog(res: any){
    this.dialog.open(UserDetailsComponent, {
      data: res
    });
  }
}
