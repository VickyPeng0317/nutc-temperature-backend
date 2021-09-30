import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[requiredForm]'
})
export class RequiredFormDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    const requiredSpan = ` <span style="color: red;">*</span>`;
    const html = this.el.nativeElement.innerHTML;
    this.el.nativeElement.innerHTML = html + requiredSpan;
  }
}
