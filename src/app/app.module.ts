import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlueComponent } from './blue/blue.component';
import { YellowComponent } from './yellow/yellow.component';
import { HelloComponent } from './hello.component';
import { ToggleDirective } from './toggle.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ToggleDirective, BlueComponent, YellowComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
