import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceBaseService {
  protected apiUrlBase: string = 'https://localhost:44364/api';

  constructor(protected httpClient: HttpClient) {}

  protected handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation}: ${error}`);

      return of(result as T);
    };
  }

  protected log(message: string) {
    console.log(message);
  }
}
