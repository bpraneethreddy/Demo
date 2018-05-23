import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AddEmployeeComponent } from '../dashboard/add-employee/add-employee.component';
import { EmployeeListComponent } from '../dashboard/employee-list/employee-list.component';
import { DashboardModule } from '../dashboard/dashboard.module';

const routes: Routes = [{
  path:"",
  component:LoginComponent

},{
  path:"dashboard",
  loadChildren: () => DashboardModule
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainroutingRoutingModule { }
