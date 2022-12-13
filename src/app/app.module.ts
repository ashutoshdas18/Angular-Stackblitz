import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputChangeComponent } from './input-change/input-change.component';
import { InputSetterComponent } from './input-setter/input-setter.component';
import { OuputEventComponent } from './ouput-event/ouput-event.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    InputChangeComponent,
    InputSetterComponent,
    OuputEventComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
