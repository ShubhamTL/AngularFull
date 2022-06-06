import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/pojo/employee';
import { EmployeeCRUDService } from 'src/app/services/employee-crud.service';

@Component({
  selector: 'app-get-all-employees',
  templateUrl: './get-all-employees.component.html',
  styleUrls: ['./get-all-employees.component.css']
})
export class GetAllEmployeesComponent implements OnInit {
allEmployee: Employee []=[];

  constructor(private employeeCURDservice: EmployeeCRUDService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
 reloadData(){
   this.employeeCURDservice.getAllEmployees().subscribe(
     data=>{this.allEmployee=data
    console.log(this.allEmployee);
    }
   );
 }
 deleteEmployee(employeeId: number){
   this.employeeCURDservice.deleteEmployee(employeeId).subscribe(
    data=>{
     console.log(data);
     this.reloadData();
   } 
   );

 }
 getdetails(employeeId:number){
  console.log(employeeId);
  this.router.navigate(['/employeedetails',employeeId])
  
 }
 updateEmployee(employeeId:number){
   this.router.navigate(['/updateemployee', employeeId]);

 }
}
