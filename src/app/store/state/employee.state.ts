import { Employee } from "../../../models/employee.model";

export interface EmployeeState {
    employees: Employee[];
    loaded: boolean;
    error: any;
}

export const initialState: EmployeeState = {
    employees: [],
    loaded: false,
    error: null
};