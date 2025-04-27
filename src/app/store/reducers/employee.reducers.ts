import { createReducer, on } from "@ngrx/store";
import { Employee } from "../../../models/employee.model";
import { employeeActions } from "../actions/employee.actions";

const initialState: Employee[] = []

export const employeeReducer = createReducer(
    initialState,
    on(employeeActions.loadEmployeeSuccess, (state, action) => { return [...state, ...action.employee] })
) 