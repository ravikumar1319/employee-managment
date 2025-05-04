// auth.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../state/login.state';

export const selectAuthState = createFeatureSelector<AuthState>('login');

export const selectUser = createSelector(selectAuthState, s => s.user);
export const selectToken = createSelector(selectAuthState, s => s.token);
export const selectIsAuthenticated = createSelector(selectAuthState, s => !!s.user);
export const selectAuthLoading = createSelector(selectAuthState, s => s.loaded);
export const selectAuthError = createSelector(selectAuthState, s => s.error);
