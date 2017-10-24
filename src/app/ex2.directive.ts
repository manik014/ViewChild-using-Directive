import{Directive,ElementRef,HostListener,Renderer2} from '@angular/core';

@Directive({
    selector: '[ex2]'
})

export class EX2Directive{
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }
@HostListener('click')
createElement(){
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText("click here to add div");
    this.renderer.appendChild(div,text);
    const parent = this.elRef.nativeElement.parentNode;
this.renderer.insertBefore(parent,div,null);
}    

}