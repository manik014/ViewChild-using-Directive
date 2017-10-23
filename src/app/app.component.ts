import { Component,ViewChild } from '@angular/core';
import{ColorDirective} from './color.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ColorDirective)
  private colorDirective: ColorDirective;
  changeColor(color: string){
this.colorDirective.change(color);
  }

}
