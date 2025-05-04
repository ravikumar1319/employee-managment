import { createReducer, on } from "@ngrx/store";
import { initialState } from "../state/login.state";
import { loginActions } from "../actions/login.action";

export const loginReducer = createReducer(
    initialState,
    on(loginActions.loginSuccess, (state, action) => {
        function getRandomDarkColor(): string {
            const r = Math.floor(Math.random() * 100);
            const g = Math.floor(Math.random() * 100);
            const b = Math.floor(Math.random() * 100);
            return `rgb(${r}, ${g}, ${b})`;
        }
        localStorage.setItem('userDetails', JSON.stringify({ token: action.token, userName: action.user?.userName, profile: getRandomDarkColor() }))
        return {
            ...state,
            token: action.token,
            user: action.user,
            loaded: true,
            error: null
        }
    }),
    on(loginActions.loginFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
    on(loginActions.logout, (state, action) => {
        localStorage.removeItem('userDetails')
        return {
            ...initialState
        }
    })
)