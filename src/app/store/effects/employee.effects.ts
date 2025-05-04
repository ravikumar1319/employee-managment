import { inject, Injectable } from "@angular/core";
import { EmployeeService } from "../../services/employee.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { employeeActions } from "../actions/employee.actions";

@Injectable()
export class MoviesEffects {
    actions$ = inject(Actions);
    _employeeService = inject(EmployeeService);

    constructor() {
    }
    loadEmployees$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(employeeActions.loadEmployee),
            switchMap(() => this._employeeService.getEmployees()
                .pipe(
                    map((employee: any) => employeeActions.loadEmployeeSuccess({ employee })),
                    catchError((error) => of(employeeActions.loadEmployeeFailure({ error: error.error && error.error.message || 'Unknown error' })))
                )
            )
        );
    });
}