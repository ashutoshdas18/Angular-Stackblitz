import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ouput-event',
  templateUrl: './ouput-event.component.html',
  styleUrls: ['./ouput-event.component.css'],
})
export class OuputEventComponent implements OnInit {
  constructor() {}

  @Output() childState = new EventEmitter<boolean>();

  ngOnInit() {}
  buttonClick(val: boolean) {
    if (val) {
      this.childState.emit(true);
    } else this.childState.emit(false);
  }
}
