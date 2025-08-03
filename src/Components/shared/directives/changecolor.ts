import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Changecolor]'
})
export class Changecolor {

 constructor(
    private el : ElementRef,
    private renderer : Renderer2
  ) { 

  }

  @HostListener('mouseenter') onMouseover(){
 this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseleave') onMouseleave(){
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }

}
