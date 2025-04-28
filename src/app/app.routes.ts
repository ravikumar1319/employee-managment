import { Routes } from '@angular/router';
import { EmployeeAddComponent } from './pages/employee-add/employee-add.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { BaseComponent } from './layout/base/base.component';
import { authRoutes } from './auth/auth.routes';

export const routes: Routes = [
    { path: 'auth', children: authRoutes },
    {
        path: '',
        component: BaseComponent,
        children: [
            { path: '', component: EmployeeListComponent, },
            { path: 'add', component: EmployeeAddComponent },
            { path: 'edit/:id', component: EmployeeAddComponent },
        ]
    }
];
