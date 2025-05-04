import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      // Add forgot-password route here
      // { path: 'forgot-password', component: ForgotPasswordComponent },
    ],
  },
];
