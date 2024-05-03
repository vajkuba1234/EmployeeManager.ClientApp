import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Employee } from '../types/employee';
import { ApiServiceBaseService } from './api-service-base.service';
import { EmployeeList } from '../types/employee-list';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class EmployeeService extends ApiServiceBaseService {
  private apiUrl: string = `${this.apiUrlBase}/Employees`;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient
      .post(this.apiUrl, httpOptions)
      .pipe(this.handleError('createEmployee', employee));
  }

  getEmployees(): Observable<EmployeeList> {
    return this.httpClient.get<EmployeeList>(this.apiUrl).pipe(
      tap((_) => this.log('fetched employees')),
      catchError(this.handleError<EmployeeList>('getEmployees'))
    );
  }
}
