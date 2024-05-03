import { Routes } from '@angular/router';
import { CountriesListComponent } from './components/country/countries-list/countries-list.component';
import { EmployeesListComponent } from './components/employee/employees-list/employees-list.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';

export const routes: Routes = [
  {
    path: '',
    component: EmployeesListComponent,
  },
  {
    path: 'new-employee',
    component: EmployeeCreateComponent,
  },
  {
    path: 'countries',
    component: CountriesListComponent,
  },
];
