import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments = [
    {"id": 134, "name": "Mathematics"},
    {"id": 144, "name": "Physics"},
    {"id": 154, "name": "Engineering"},
    {"id": 164, "name": "Business Administration"},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDepartment(department) {
    this.router.navigate(['/departments', department.id]);
  }

}
