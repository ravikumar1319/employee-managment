import { Routes } from '@angular/router';
import { EmployeeAddComponent } from './pages/employee-add/employee-add.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';

export const routes: Routes = [
    { path: '', component: EmployeeListComponent },
    { path: 'add', component: EmployeeAddComponent },
    { path: 'edit/:id', component: EmployeeAddComponent },

];
