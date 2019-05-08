import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {
  constructor(private elementRef: ElementRef) { }

  @HostBinding('class.grey') isActive = false;

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event) {
    this.isActive = true;
  }

  @HostListener('document:mouseout', ['$event'])
  onMouseOut(event) {
    if (event.target.classList.contains('blue')) {
      this.isActive = false;
    }
  }
}