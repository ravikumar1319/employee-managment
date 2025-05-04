import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import { loginActions } from '../actions/login.action';
import { Login } from '../../../models/login.models';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';



@Injectable()
export class LoginEffects {
  actions$ = inject(Actions);
  _authService = inject(AuthService)
  router = inject(Router)

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginActions.initLogin),
      exhaustMap((action: { user: Login }) =>
        this._authService.login(action.user).pipe(
          map(({ user, token }: { user: Partial<Login>, token: string }) =>
            loginActions.loginSuccess({ user, token })
          ),
          catchError((error) => of(loginActions.loginFailure({ error })))
        ))
    )
  })

  // auth.effects.ts
  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.loginSuccess),
      tap(() => {
        this.router.navigate(['/']);
      })
    ),
    { dispatch: false } // No further action
  );
}
