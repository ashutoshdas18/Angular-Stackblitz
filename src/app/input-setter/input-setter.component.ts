import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-input-setter',
  templateUrl: './input-setter.component.html',
  styleUrls: ['./input-setter.component.css'],
})
export class InputSetterComponent implements OnInit, OnChanges {
  myHero: Hero;
  constructor() {}
  @Input() set Hero(hero: Hero) {
    this.myHero = hero;
  }
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
