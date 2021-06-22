import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from './app.service';
import { UserDetailsComponent } from './user/user-details/user-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codengineCode';
  constructor(public appService: AppService,public dialog: MatDialog){
  }
  
}
