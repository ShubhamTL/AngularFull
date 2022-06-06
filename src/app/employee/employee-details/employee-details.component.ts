import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/pojo/employee';
import { EmployeeCRUDService } from 'src/app/services/employee-crud.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee:Employee=new Employee();
  employeeId:number=0;
  constructor(private employeeCRUDService:EmployeeCRUDService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId=this.route.snapshot.params['employeeId'];
    this.loadEmployeeDetails(this.employeeId)
  }

  loadEmployeeDetails(employeeId:number){
    this.employeeCRUDService.getSingleEmployee(employeeId).subscribe(
      Data =>{
        this.employee=Data;
      }
    )

  }

}
