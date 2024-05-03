import { Routes } from '@angular/router';
import { CountriesListComponent } from './components/country/countries-list/countries-list.component';
import { EmployeesListComponent } from './components/employee/employees-list/employees-list.component';

export const routes: Routes = [
  {
    path: '',
    component: EmployeesListComponent,
  },
  {
    path: 'seznam-zemi',
    component: CountriesListComponent,
  },
];
