import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryItem } from '../../../types/country';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'app-employee-create',
  standalone: true,
  imports: [],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.scss',
})
export class EmployeeCreateComponent {
  countries: CountryItem[] = [];

  employeeForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    middleName: new FormControl(undefined),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    street: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    salary: new FormControl(0, Validators.required),
    birthDate: new FormControl(new Date(), Validators.required),
    joinedDate: new FormControl(new Date(), Validators.required),
    country: new FormControl(this.countries, Validators.required),
  });

  constructor(
    private employeeService: EmployeeService,
    private countriesService: CountryService
  ) {}

  ngOnInit(): void {
    this.getCountries();
  }

  private getCountries(): void {
    this.countriesService
      .getCountries()
      .subscribe((countryList) => (this.countries = countryList.items));
  }
}
