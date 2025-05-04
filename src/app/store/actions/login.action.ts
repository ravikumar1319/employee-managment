import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Login } from "../../../models/login.models";

export const loginActions = createActionGroup({
    source: '[LOGIN]',
    events: {
        'Init Login': props<{ user: Login }>(),
        'Login Success': props<{ user: Partial<Login>, token: string }>(),
        'Login Failure': props<{ error: string }>(),

        'Logout': emptyProps(),
    }
})