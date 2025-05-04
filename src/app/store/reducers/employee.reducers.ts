import { createReducer, on } from "@ngrx/store";
import { employeeActions } from "../actions/employee.actions";
import { initialState } from "../state/employee.state";


export const employeeReducer = createReducer(
    initialState,
    on(employeeActions.loadEmployeeSuccess, (state, action) => {
        return {
            ...state,
            employees: action.employee,
            loaded: true,
            error: null
        }
    }),
    on(employeeActions.loadEmployeeFailure, (state, action) => {
        return {
            ...state,
            employees: [],
            loaded: false,
            error: action.error
        }
    }),
    on(employeeActions.clearEmployee, () => {
        return initialState
    })
) 