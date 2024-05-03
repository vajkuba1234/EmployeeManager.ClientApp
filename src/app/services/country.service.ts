import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { CountryItem, CountryList } from '../types/country';
import { ApiServiceBaseService } from './api-service-base.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CountryService extends ApiServiceBaseService {
  private apiUrl: string = `${this.apiUrlBase}/Countries`;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getCountries(): Observable<CountryList> {
    return this.httpClient.get<CountryList>(this.apiUrl).pipe(
      tap((_) => this.log('fetched countries')),
      catchError(this.handleError<CountryList>('getCountries'))
    );
  }

  createCountry(country: CountryItem): Observable<CountryItem> {
    return this.httpClient
      .post<CountryItem>(this.apiUrl, country, httpOptions)
      .pipe(catchError(this.handleError('addCountry', country)));
  }
}
