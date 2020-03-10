import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, Event } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  params;
  departmentId;
  previousUrl;
  overview;
  contact;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    // Worst practice
    // this.params = this.route.snapshot.params;
    // console.log(this.params);
    // this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));
    // console.log(this.departmentId);

    // Best Practice
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentId = parseInt(params.get('id'));
    });
    // previous url
    // this.previousUrl = this.location.back();
    // console.log(this.previousUrl);
  }

  showOverview(departmentId) {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }
  showContact(departmentId) {
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

}
