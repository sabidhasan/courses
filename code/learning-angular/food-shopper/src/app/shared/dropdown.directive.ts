import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input('appDropdown') className: string;
  private isOpen: boolean = false;
  constructor(private elementRef: ElementRef) { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.elementRef.nativeElement.classList.toggle(this.className || 'open')
  }
}
