import { Login } from "../../../models/login.models";

export interface AuthState {
    user: Partial<Login> | null,
    token: string | null,
    loaded: boolean,
    error: string | null
}

export const initialState: AuthState = {
    user: null,
    token: null,
    loaded: false,
    error: null
}