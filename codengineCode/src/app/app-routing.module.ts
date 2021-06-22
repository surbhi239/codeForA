import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './user/department/department.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
      path: 'project/department/:id',
      component: DepartmentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
