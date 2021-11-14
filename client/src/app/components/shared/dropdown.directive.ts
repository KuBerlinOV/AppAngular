import { Directive, HostBinding, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  isOpen: boolean = false;
  // @HostBinding("class") elementClass: string[];
  @HostListener("click") toggleOpen(): void {
    let element = this.elRef.nativeElement.querySelector(".dropdown-menu");
    console.log(element)
    if (!this.isOpen) {
      this.isOpen = !this.isOpen
      this.renderer.addClass(element, "show")
    } else {
      this.isOpen = !this.isOpen
      this.renderer.removeClass(element, "show")
    }
  }


}
