import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrettyDate]'
})
export class PrettyDateDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
    console.log(el);
  }
}
