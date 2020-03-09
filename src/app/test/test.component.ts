import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test', // other 2 ways to define -> .app-test, [app-test]
  // templateUrl: './test.component.html',
  template: `
      <div class="orange">Inline Template of {{ getTitle() }} {{ subTitle }}</div>
      <!-- interpolation -->
      <div>{{ 2 + 2 }}</div>
      <div>{{ 'Welcome ' + name }}</div>
      <div>{{ 'Welcome ' + name.toUpperCase() }}</div>
      <div>{{ 'Name Length: ' + name.length }}</div>
      <div>{{ greet() }}</div>
      <div><a href="{{ siteUrl }}">{{ siteUrl }}</a></div>
      <br>
      <!-- property binding -->
      <div>
        <input [id]="myId" type="text" value="Lorem Ipsum"><br>
        <input id="{{ myId }}" type="text" value="Lorem Ipsum"><br>
        <input [disabled]="isDisabled" type="text" value="Lorem Ipsum"><br>
        <input bind-disabled="isDisabled" type="text" value="Lorem Ipsum">
      </div>
      <br>
      <!-- class binding -->
      <div>
        <p [class]="successClass">Success</p>
        <p [class.text-error]="hasError">Error</p>
        <p [ngClass]="messageClasses">Special Class</p>
      </div>
      <br>
      <!-- style binding -->
      <div>
        <p [style.color]="hasError ? 'red' : 'green'">Style Binding</p>
        <p [style.color]="highlightColor">Highlight Color</p>
        <p [ngStyle]="styleClasses">Highlight Styles</p>
      </div>
      <br>
      <!-- event binding -->
      <div>
        <button (click)="onClick($event)">{{ greeting.length ? greeting : 'Greet' }}</button>
        <button (click)="greeting = 'Hello World'">{{ greeting.length ? 'Hello World' : 'Greet' }}</button>
      </div>
      <br>
      <!-- template reference variables -->
      <div>
        <input #myInput type="text">
        <button (click)="logMessage(myInput.value)">Log</button>
      </div>
  `,
  // styleUrls: ['./test.component.css'],
  styles: [`
      div.orange {
        color: orange;
      }
      .text-success {
        color: green;
      }
      .text-error {
        color: red;
      }
      .text-warning {
        font-style: italic;
      }
  `]
})
export class TestComponent implements OnInit {
  private title = 'Test';
  // interpolation
  public subTitle = 'Component';
  public name = "S M Iftakhairul";
  public siteUrl = window.location.href;
  // property binding
  public myId = 'testId';
  public isDisabled = true;
  // class binding
  public successClass = 'text-success';
  public errorClass = 'text-error';
  public warningClass= "text-warning";
  public hasError = true;
  public hasWarning = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-error": this.hasError,
    "text-warning": this.hasWarning
  }
  // style binding
  public highlightColor = "purple";
  public styleClasses = {
    color: "blue",
    fontStyle: "italic"
  }
  // event binding
  public greeting = "";

  constructor() { }

  ngOnInit(): void {
  }

  getTitle() {
    return this.title;
  }

  // interpolation
  greet() {
    return 'Hello S M Iftakhairul';
  }

  // event binding
  onClick(event) {
    console.log('Good afternoon S M Iftakhairul');
    console.log(event.type);
    this.greeting = 'Good afternoon S M Iftakhairul';
  }

  // template reference variables
  logMessage(value) {
    console.log(value);
  }

}
