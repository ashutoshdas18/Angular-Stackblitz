import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-input-change',
  templateUrl: './input-change.component.html',
  styleUrls: ['./input-change.component.css'],
})
export class InputChangeComponent implements OnInit, OnChanges {
  constructor() {}

  ngOnInit() {}
  @Input() hero!: Hero;
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
