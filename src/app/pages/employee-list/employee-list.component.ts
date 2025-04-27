import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'emp-employee-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(res => {
      this.employees = res
    });
  }

  deleteEmployee(id: number) {
    this._employeeService.deleteEmployee(id);
    // this.employees = this._employeeService.getEmployees();
  }
}
