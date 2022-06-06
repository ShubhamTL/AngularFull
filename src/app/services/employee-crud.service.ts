import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../pojo/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCRUDService {
  
 baseURL:string="http://localhost:8080/employeecrud/employee";
  constructor(private http:HttpClient) { }
deleteEmployee(employeeId:number):Observable<boolean>{
  console.log('in deleteEmployee '+ employeeId);
  
  return this.http.delete<boolean>(this.baseURL+'/'+employeeId);
}
  
getAllEmployees() : Observable<Employee[]>{
  return this.http.get<Employee[]>(this.baseURL);
}

  addEmployee(employee: Employee) :Observable<boolean>{
    console.log("in emplyeeCRUD service ");
    console.log(employee);
    return this.http.post<boolean>(this.baseURL, employee);
    console.log("employeeCRUDService end");
    
  
    
  }
  getSingleEmployee(employeeId:number):Observable<Employee>{
    return this.http.get<Employee>(this.baseURL+'/'+employeeId);
  
  }
  updateEmployees(employee: Employee) : Observable<boolean>{
    return this.http.put<boolean>(this.baseURL, employee);
  }
}

