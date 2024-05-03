import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../../types/employee';

@Component({
  selector: 'app-employee-create',
  standalone: true,
  imports: [],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.scss',
})
export class EmployeeCreateComponent {

  employeeForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    middleName: new FormControl(undefined),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    street: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
  })

  constructor(private employeeService: EmployeeService) {}
}
