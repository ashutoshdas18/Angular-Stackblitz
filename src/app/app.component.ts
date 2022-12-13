import { AfterContentInit, AfterViewInit, Component, VERSION, ViewChild } from '@angular/core';
import { heroes } from './hero';
import {ViewChildComponent} from './view-child/view-child.component';
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
  // visible: boolean = false;
  // visibility(val: any) {
  //   console.log(val);
  //   this.visible = val;
  // }

  //Get child property and methods
  // 1.import the child class to the parent component.ts class
  // 2. Pass the class to @ViewChild() directive and inject the child class to a variable
  // 3. We can access the child's data only after the view init, so we use AfterViewInit lifecycle interface
  // Info - ViewChild doesn't work we have the child component in our template
  // 
  // @ViewChild(ViewChildComponent)
  // private value!:ViewChildComponent
  // ngAfterViewInit(){
  //   console.log(this.value.x)
  // }

}
