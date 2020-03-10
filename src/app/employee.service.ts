import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url: string = '/assets/data/employees1.json';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url)
                      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
  getEmployeesPlain() {
    return [
      {"id": 1, "name": "S M Iftakhairul", "email": "s.m.iftakhairul@gmail.com"},
      {"id": 2, "name": "John Doe", "email": "john.doe@gmail.com"},
      {"id": 3, "name": "Alex Hunter", "email": "alex.hunter@gmail.com"},
      {"id": 4, "name": "Matt Demon", "email": "matt.demon@gmail.com"},
      {"id": 5, "name": "Henry Schulz", "email": "henry.schulz@gmail.com"}
    ];
  }
}
