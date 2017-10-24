import{Directive,ElementRef,HostListener,Renderer2} from '@angular/core';

@Directive({
    selector: '[ex5]'
})

export class EX5Directive{
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }
@HostListener('mouseover')
onmouseover(){
    this.renderer.addClass(this.elRef.nativeElement,'classfile');
}    
@HostListener('mouseleave') 
onMouseLeave() {
    this.renderer.removeClass(this.elRef.nativeElement, 'classfile');
}   

}