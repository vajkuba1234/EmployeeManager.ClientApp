import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../../../types/employee';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss',
})
export class EmployeesListComponent {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (employeeList) => (this.employees = employeeList.items)
    );
  }
}
