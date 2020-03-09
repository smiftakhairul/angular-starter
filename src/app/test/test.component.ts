import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test', // other 2 ways to define -> .app-test, [app-test]
  // templateUrl: './test.component.html',
  template: `
      <div class="orange">Inline Template of {{ getTitle() }} {{ subTitle }}</div>
      <div>{{ 2 + 2 }}</div>
      <div>{{ 'Welcome ' + name }}</div>
      <div>{{ 'Welcome ' + name.toUpperCase() }}</div>
      <div>{{ 'Name Length: ' + name.length }}</div>
      <div>{{ greet() }}</div>
      <div><a href="{{ siteUrl }}">{{ siteUrl }}</a></div>
  `,
  // styleUrls: ['./test.component.css'],
  styles: [`
      div.orange {
        color: orange
      }
  `]
})
export class TestComponent implements OnInit {
  private title = 'Test';
  public subTitle = 'Component';
  public name = "S M Iftakhairul";
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  getTitle() {
    return this.title;
  }

  greet() {
    return 'Hello S M Iftakhairul';
  }

}
