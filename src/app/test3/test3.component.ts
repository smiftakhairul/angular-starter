import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {
  name = 'S M Iftakhairul';
  personInfo = {
    name: 'S M Iftakhairul',
    email: 's.m.iftakhairul@gmail.com'
  }
  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
