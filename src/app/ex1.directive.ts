import{Directive,ElementRef,HostListener,Renderer2} from '@angular/core';

@Directive({
    selector: '[ex1]'
})

export class EX1Directive{
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }
@HostListener('click')
createElement(){
    const li = this.renderer.createElement('li');
    const text = this.renderer.createText("click here to add li");
    this.renderer.appendChild(li,text);
    this.renderer.appendChild(this.elRef.nativeElement,li);
}    

}