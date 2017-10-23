import{Directive,ElementRef,AfterViewInit} from '@angular/core'

@Directive({
    selector : '[cpColor]'
})

export class ColorDirective implements AfterViewInit{
    constructor(private elref: ElementRef){

    }
    ngAfterViewInit() {
this.elref.nativeElement.style.color = 'red';
    }
    change(changeedColor: string){
        this.elref.nativeElement.style.color = changeedColor;
    }

}