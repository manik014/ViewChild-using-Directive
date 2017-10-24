import{Directive,ElementRef,HostListener,Renderer2} from '@angular/core';

@Directive({
    selector: '[ex4]'
})

export class EX4Directive{
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }
@HostListener('mouseover')
onmouseover(){
    this.renderer.setAttribute(this.elRef.nativeElement,'value','Welcome Thiksha');
}    
@HostListener('mouseleave') 
onMouseLeave() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'value');
}   

}