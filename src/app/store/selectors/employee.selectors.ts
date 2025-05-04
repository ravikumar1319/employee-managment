import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeState } from "../state/employee.state";

export const selectEmployeeState = createFeatureSelector<EmployeeState>('employee')

export const selectEmployeeLoaded = createSelector(
  selectEmployeeState,
  (state: EmployeeState) => state.loaded
);

export const selectAllEmployees = createSelector(
  selectEmployeeState,
  (state: EmployeeState) => state.employees
)

export const selectEmployeeError = createSelector(
  selectEmployeeState,
  (state: EmployeeState) => state.error
);
