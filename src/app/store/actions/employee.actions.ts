import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Employee } from "../../../models/employee.model";

export const clearEmployee = createAction('[Employee] Clear Employee')

export const employeeActions = createActionGroup({
    source: '[Employee]',
    events: {
        'Load Employee': emptyProps(),
        'Load Employee Success': props<{ employee: Employee[] }>(),
        'Load Employee Failure': props<{ error: string }>(),
        'Clear Employee': emptyProps(),
    }
})
