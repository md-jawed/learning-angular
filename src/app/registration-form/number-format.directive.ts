import { Directive,ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appNumberFormat]'
})
export class NumberFormatDirective implements OnChanges{
  @Input() val!:string;
  ngOnChanges() {
    // this.el.nativeElement.value = 'Test';
    
    console.log(this.val);
  }
  constructor(public el: ElementRef) { 
    el.nativeElement.style.color = 'red';
    el.nativeElement.value = this.val;
    console.log(this.val);
    // 10 -> 10.00 or 10.678 -> 10.68 
  }

}
