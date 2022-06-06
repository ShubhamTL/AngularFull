package com.mindgate.main.service;

import java.util.List;

import com.mindgate.main.pojo.Employee;

public interface EmployeeServiceInterface {
	
	public boolean addNewEmployee(Employee employee);
	public boolean updateEmployee(Employee employee);
	public boolean deleteEmployee(int employeeId);
	public Employee getEmployeeByEmployeeId(int employeeId);
	public List<Employee> getAllEmployees();
	

}
