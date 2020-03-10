import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { Error404Component } from './error404/error404.component';
import { AppComponent } from './app.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';


const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'}, // pathMatch: 'prefix'
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employees/details/all', component: EmployeeDetailComponent},
  {path: 'departments', component: DepartmentListComponent},
  {
    path: 'departments/:id', component: DepartmentDetailComponent,
    children: [
      {path: 'overview', component: DepartmentOverviewComponent},
      {path: 'contact', component: DepartmentContactComponent},
    ]
  },
  {path: 'faculties', component: FacultyListComponent},
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  EmployeeListComponent,
  EmployeeDetailComponent,
  DepartmentListComponent,
  DepartmentDetailComponent,
  FacultyListComponent,
  Error404Component,
  DepartmentOverviewComponent,
  DepartmentContactComponent
]
