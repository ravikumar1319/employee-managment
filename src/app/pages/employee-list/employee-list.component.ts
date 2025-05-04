import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { RouterModule } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { employeeActions } from '../../store/actions/employee.actions';
import { Observable, take } from 'rxjs';
import { selectEmployeeState, selectAllEmployees } from '../../store/selectors/employee.selectors';

@Component({
  selector: 'emp-employee-list',
  standalone: true,
  imports: [RouterModule, CommonModule, AsyncPipe],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employee$: Observable<Employee[]> | undefined
  constructor(
    private store: Store<{ employee: Employee[] }>
  ) {
    this.employee$ = this.store.select(selectAllEmployees);
  }

  ngOnInit() {
    this.store.select(selectEmployeeState).pipe(take(1)).subscribe(res => {
      if (!res.loaded) {
        this.store.dispatch(employeeActions.loadEmployee());
      }
    });
  }

  deleteEmployee(id: number) {
    // this._employeeService.deleteEmployee(id);
    // this.employees = this._employeeService.getEmployees();
  }

  ngOnDestroy(): void {
    this.store.dispatch(employeeActions.clearEmployee())
  }
}
