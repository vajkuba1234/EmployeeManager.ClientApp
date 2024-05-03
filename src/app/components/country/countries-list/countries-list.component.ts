import { Component } from '@angular/core';
import { CountryService } from '../../../services/country.service';
import { Country, CountryItem } from '../../../types/country';
import { NgFor } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss',
})
export class CountriesListComponent {
  countries: Country[] = [];

  countryForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private countryService: CountryService) {}

  model = new CountryItem('');

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService
      .getCountries()
      .subscribe((countryList) => (this.countries = countryList.items));
  }

  onSubmit(): void {
    this.countryService
      .createCountry(new CountryItem(this.countryForm.value.name!))
      .subscribe();
  }
}
