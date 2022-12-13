import { Component, VERSION } from '@angular/core';
import { heroes } from './hero';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  //Change hero input on button click
  // heroes = heroes;
  // changeHero() {
  //   if (this.heroes == null) {
  //     this.heroes = heroes;
  //   } else this.heroes = null;
  // }

  //Accept the output and process
  visible: boolean = false;
  visibility(val: any) {
    console.log(val);
    this.visible = val;
  }
}
