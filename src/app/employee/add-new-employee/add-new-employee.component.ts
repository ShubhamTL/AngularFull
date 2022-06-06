import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/pojo/employee';
import { EmployeeCRUDService } from 'src/app/services/employee-crud.service';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  submitted:boolean=false;

  constructor( private employeeService: EmployeeCRUDService, private router: Router) { }

  ngOnInit(): void {
  }goToHome(){

    this.router.navigate(['/getallemployees'])
  }
  onFormSubmit(){
    this.submitted=true;
    console.log(this.employee);
    this.employeeService.addEmployee(this.employee).subscribe(
      data=>{
        console.log(data);
      }
    );

  }

}
