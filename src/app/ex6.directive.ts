import{Directive,ElementRef,HostListener,Renderer2} from '@angular/core';

@Directive({
    selector: '[ex6]'
})

export class EX6Directive{
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }

 flag=false;
@HostListener('click')
onClick(){
this.flag = (this.flag === true)? false:true;
if(this.flag){
    this.renderer.setStyle(this.elRef.nativeElement,"color","brown");
    this.renderer.setStyle(this.elRef.nativeElement,"font-size","20px");
}
else{
    this.renderer.removeStyle(this.elRef.nativeElement, 'color');
    this.renderer.removeStyle(this.elRef.nativeElement, 'font-size');
}
}
}

