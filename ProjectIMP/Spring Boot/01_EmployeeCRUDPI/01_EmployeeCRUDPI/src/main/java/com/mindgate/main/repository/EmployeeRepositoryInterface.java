package com.mindgate.main.repository;

import java.util.List;

import com.mindgate.main.pojo.Employee;

public interface EmployeeRepositoryInterface {


	public boolean addNewEmployee(Employee employee);
	public boolean updateEmployee(Employee employee);
	public boolean deleteEmployee(int employeeId);
	public Employee getEmployeeByEmployeeId(int employeeId);
	public List<Employee> getAllEmployees();
	

}
