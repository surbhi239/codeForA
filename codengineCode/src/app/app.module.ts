import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { MatDialogModule } from '@angular/material/dialog';
import { DepartmentComponent } from './user/department/department.component';
import {MatTableModule} from '@angular/material/table';
import { UserDetailsComponent } from './user/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DepartmentComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatTreeModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
