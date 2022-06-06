import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/pojo/employee';
import { EmployeeCRUDService } from 'src/app/services/employee-crud.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})

export class UpdateEmployeeComponent implements OnInit {

  submitted:boolean=false;
  employee:Employee=new Employee();
  employeeId:number=0;
  constructor(private employeeCRUDService:EmployeeCRUDService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.employeeId=this.route.snapshot.params['employeeId'];
    this.updateEmployee(this.employeeId);
  }

  updateEmployee(employeeId:number){
    this.employeeCRUDService.getSingleEmployee(employeeId).subscribe(
      Data =>{
        this.employee=Data;
      }
    )

  }
  onFormSubmit(){

    this.employeeCRUDService.updateEmployees(this.employee).subscribe(
      Data=>{
        this.submitted=true;
        console.log(Data);
        
      }
    )
  }
  goToHome(){
   
    this.router.navigate(['/getallemployees'])
  }
}
