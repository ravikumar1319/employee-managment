import { Injectable } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT } from '../app.constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  private employees: Employee[] = [
    { id: 1, name: 'John Doe', department: 'HR' },
    { id: 2, name: 'Jane Smith', department: 'IT' }
  ];

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_ENDPOINT+'/api/employee');
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  updateEmployee(id: number, updated: Employee) {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index > -1) this.employees[index] = updated;
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find(emp => emp.id === id);
  }
}
