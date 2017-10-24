import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{ColorDirective} from './color.directive';
import{FormsModule} from '@angular/Forms';
import{ColorChangeDirective} from './color-change.directive';
import{EX1Directive} from './ex1.directive';
import{EX2Directive} from './ex2.directive';
import{EX3Directive} from './ex3.directive';
import{EX4Directive} from './ex4.directive';
import{EX5Directive} from './ex5.directive';
import{EX6Directive} from './ex6.directive';
@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    ColorChangeDirective,
    EX1Directive,
    EX2Directive,
    EX3Directive,
    EX4Directive,
    EX5Directive,
    EX6Directive
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
