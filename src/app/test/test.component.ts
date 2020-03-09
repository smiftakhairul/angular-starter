import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test', // other 2 ways to define -> .app-test, [app-test]
  // templateUrl: './test.component.html',
  template: `<div>Inline Template of {{ getTitle() }} Component</div>`,
  // styleUrls: ['./test.component.css'],
  styles: [`
      div {
        color: orange
      }
  `]
})
export class TestComponent implements OnInit {
  private title = 'Test';

  constructor() { }

  ngOnInit(): void {
  }

  getTitle() {
    return this.title;
  }

}
