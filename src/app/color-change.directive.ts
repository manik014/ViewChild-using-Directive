import{Directive,ElementRef,Renderer2,OnInit} from '@angular/core';

@Directive({
    selector: '[applyColorStyle]'
})

export class ColorChangeDirective implements OnInit{
constructor(private render : Renderer2,private excolor: ElementRef){

}
ngOnInit(){
 this.render.setStyle(this.excolor.nativeElement,'color','green');
}
}