import { Component,ViewChild,ElementRef,Renderer2 } from '@angular/core';
import{ColorDirective} from './color.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ColorDirective)
  private colorDirective: ColorDirective;

  @ViewChild('ulist')             //template reference
  private ulist: ElementRef

  constructor(private render: Renderer2){

  }

  changeColor(color: string){
this.colorDirective.change(color);
  }
 //Creating text, element and append using rendere and viewchild
  onClick(){   
const li = this.render.createElement('li');
const text = this.render.createText('click here to add li');
this.render.appendChild(li,text);
this.render.appendChild(this.ulist.nativeElement,li);
  }

}
