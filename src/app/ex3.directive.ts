import{Directive,ElementRef,HostListener,Renderer2} from '@angular/core';

@Directive({
    selector: '[ex3]'
})

export class EX3Directive{
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }
    div = this.renderer.createElement('div');
    text = this.renderer.createText("Hi Welcome!");
@HostListener('mouseover')
onmouseover(){
    this.renderer.appendChild(this.div,this.text);
   this.renderer.appendChild(this.elRef.nativeElement,this.div);
}    

@HostListener('mouseleave')
onmouseleave(){
    this.renderer.removeChild (this.elRef.nativeElement,this.div);
}

}