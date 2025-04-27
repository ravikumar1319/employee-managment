import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Employee } from "../../../models/employee.model";

export const selectEmployeeState = createFeatureSelector<Employee[]>('employee')

export const selectEmployees = createSelector(
    selectEmployeeState,
    (employees: Employee[]) => employees
  );