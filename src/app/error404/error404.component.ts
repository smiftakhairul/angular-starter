import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  template: `
    <h3>404</h3>
    <p>Page not found!</p>
  `,
  styles: []
})
export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
