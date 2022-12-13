import { Component, VERSION } from '@angular/core';
import { heroes } from './hero';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  heroes = heroes;
  changeHero(){
    if(this.heroes == null){
      this.heroes = heroes;
    }
    else
    this.heroes = null;
  }
}
