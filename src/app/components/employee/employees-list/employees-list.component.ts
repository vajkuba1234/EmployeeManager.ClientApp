import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { EmployeeListItem } from '../../../types/employee-list-item';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss',
})
export class EmployeesListComponent {
  employees: EmployeeListItem[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (employeeList) => (this.employees = employeeList.items)
    );
  }
}
