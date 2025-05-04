import { Routes } from '@angular/router';
import { EmployeeAddComponent } from './pages/employee-add/employee-add.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { BaseComponent } from './layout/base/base.component';
import { authRoutes } from './pages/auth/auth.routes';
import { ReportsComponent } from './pages/reports/reports.component';
import { authGuard } from './guards/auth.guard';
import { reverseAuthGuard } from './guards/reverse-auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then(m => m.authRoutes),
    canActivate: [reverseAuthGuard]
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout/base/base.component').then(m => m.BaseComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/employee-list/employee-list.component').then(m => m.EmployeeListComponent),
        data: { title: 'Employee List' }
      },
      {
        path: 'add',
        loadComponent: () =>
          import('./pages/employee-add/employee-add.component').then(m => m.EmployeeAddComponent),
        data: { title: 'Employee Add' }

      },
      {
        path: 'edit/:id',
        loadComponent: () =>
          import('./pages/employee-add/employee-add.component').then(m => m.EmployeeAddComponent),
        data: { title: 'Employee Edit' }

      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./pages/reports/reports.component').then(m => m.ReportsComponent),
        data: { title: 'Reports' }

      }
    ]
  }

];
