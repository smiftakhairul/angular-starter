import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  // @Input() public parentData;
  @Input('parentData') public loremTitle;
  @Output() public childEvent = new EventEmitter();
  loremSubTitle = 'Init Dolor Ipsum Lorem!';

  constructor() { }

  ngOnInit(): void {
    // this.parentData;
    this.loremTitle;
    // this.fireEvent();
  }

  fireEvent() {
    this.childEvent.emit(this.loremSubTitle);
  }

}
