import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from "@angular/core";

@Directive({
    //if we put the selector into the square brackets, we can use then this directive 
    //on the element without wrapping it into the square brackets
    selector: '[appBasicHighlight]'
})
//to use the renderer to access the Dom is a good practice
export class BasicHighlightDirective implements OnInit {
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }
    @HostBinding('style.backgroundColor') backgroundColor: string
    ngOnInit() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }
    //host listener is needed to listen and react to certain event and change the style of the element
    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = "blue"
    }
    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = ""
    }
};