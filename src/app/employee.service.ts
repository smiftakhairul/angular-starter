import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {id: 1, name: 'S M Iftakhairul', email: 's.m.iftakhairul@gmail.com'},
      {id: 2, name: 'John Doe', email: 'john.doe@gmail.com'},
      {id: 3, name: 'Alex Hunter', email: 'alex.hunter@gmail.com'},
      {id: 4, name: 'Matt Demon', email: 'matt.demon@gmail.com'},
      {id: 5, name: 'Henry Schulz', email: 'henry.schulz@gmail.com'},
    ];
  }
}
