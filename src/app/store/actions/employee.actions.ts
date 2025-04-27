import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Employee } from "../../../models/employee.model";

export const loadEmployee = createAction('[Employee] Load Employee')

export const employeeActions = createActionGroup({
    source: '[Employee]',
    events: {
        'Load Employee': emptyProps(),
        'Load Employee Success': props<{ employee: Employee[] }>(),
        'Load Employee Failure': emptyProps(),
    }
})

// export const loadGroceries = createAction('[Grocery] Load Groceries')

// export const groceriesGroupAction = createActionGroup({
//     source: '[Grocery]',
//     events: {
//         'Load Groceries': emptyProps(),
//         'Load Groceries Success': props<{ groceries: Grocery[] }>(),
//         'Load Groceries Failure': emptyProps(),
//     }
// })
