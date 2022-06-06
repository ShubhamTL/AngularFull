import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewEmployeeComponent } from './employee/add-new-employee/add-new-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { GetAllEmployeesComponent } from './employee/get-all-employees/get-all-employees.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';

const routes: Routes = [
  {path:'',redirectTo:'getallemployees', pathMatch:'full'},
  {path:'addemployee', component:AddNewEmployeeComponent},
  {path:'getallemployees', component:GetAllEmployeesComponent},
  {path:'employeedetails/:employeeId', component:EmployeeDetailsComponent},
  {path:'updateemployee/:employeeId',component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
