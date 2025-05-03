import { Routes } from '@angular/router';
import { EmployeeAddComponent } from './pages/employee-add/employee-add.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { BaseComponent } from './layout/base/base.component';
import { authRoutes } from './auth/auth.routes';
import { ReportsComponent } from './pages/reports/reports.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.routes').then(m => m.authRoutes) // 🔁 Lazy load auth
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout/base/base.component').then(m => m.BaseComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/employee-list/employee-list.component').then(m => m.EmployeeListComponent)
      },
      {
        path: 'add',
        loadComponent: () =>
          import('./pages/employee-add/employee-add.component').then(m => m.EmployeeAddComponent)
      },
      {
        path: 'edit/:id',
        loadComponent: () =>
          import('./pages/employee-add/employee-add.component').then(m => m.EmployeeAddComponent)
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./pages/reports/reports.component').then(m => m.ReportsComponent)
      }
    ]
  }

];
