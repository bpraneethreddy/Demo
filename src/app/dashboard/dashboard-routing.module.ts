import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [{
  path:"",
  component:EmployeeListComponent
},{
  path:"employeelist",
  component:EmployeeListComponent
},{
  path:"addemployee/:id",
  component:AddEmployeeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
