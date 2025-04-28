import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { RouterModule } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { employeeActions } from '../../store/actions/employee.actions';
import { Observable } from 'rxjs';
import {  selectEmployeeState } from '../../store/selectors/employee.selectors';

@Component({
  selector: 'emp-employee-list',
  standalone: true,
  imports: [RouterModule, CommonModule,AsyncPipe],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employee$: Observable<Employee[]> | undefined
  constructor(
    private store: Store<{ employee: Employee[] }>
  ) {
  }
  
  ngOnInit() {
    this.employee$ = this.store.select(selectEmployeeState)
    // this._employeeService.getEmployees().subscribe(res => {
      // this.employees = res
    // });
  }

  deleteEmployee(id: number) {
    // this._employeeService.deleteEmployee(id);
    // this.employees = this._employeeService.getEmployees();
  }
}
