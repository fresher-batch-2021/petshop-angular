import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appElementref]'
})
export class ElementrefDirective {

  constructor(private element:ElementRef) { 
    this.element.nativeElement.style.color="red";
  }

}
