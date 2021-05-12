import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el:ElementRef, private renderer: Renderer2) { }
  
  @HostBinding('style.border')
  borderColor:string = "";

  @HostListener('mouseover')
  mouseOver(): void {
    const elem = this.el.nativeElement.querySelector(".image");
    this.renderer.setStyle(elem, 'display', 'block');
    this.borderColor = '3px solid red';
  }

  @HostListener('mouseout')
  mouseOut(): void {
    const elem = this.el.nativeElement.querySelector(".image");
    this.renderer.setStyle(elem, 'display', 'none');
    this.borderColor = 'none';
  }

 }
