import { Component, OnDestroy } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { Store } from '@ngrx/store';
import { Employee } from '../../../models/employee.model';
import { employeeActions } from '../../store/actions/employee.actions';
import { AsideComponent } from '../../shared/components/aside/aside.component';

@Component({
  selector: 'emp-base',
  standalone: true,
  imports: [AsideComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent implements OnDestroy {

  constructor(
    private store: Store<{ employee: Employee[] }>
  ) {
    store.dispatch(employeeActions.loadEmployee())
  }

  ngOnDestroy(): void {
    this.store.dispatch(employeeActions.clearEmployee())
  }
}
