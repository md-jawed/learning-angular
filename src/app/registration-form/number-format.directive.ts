import { AfterViewChecked, AfterViewInit, Directive,ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Directive({
  selector: '[appNumberFormat]'
})
export class NumberFormatDirective implements OnChanges{
  @Input() myval:any;
  
  constructor(public el: ElementRef) { 
    // el.nativeElement.style.color = 'red';
    // el.nativeElement.value = this.myval;
    // console.log(this.myval);
    // 10 -> 10.00 or 10.678 -> 10.68 
  }
  ngOnChanges() {
    // this.el.nativeElement.value = 'Test';
    // console.log(this.el.nativeElement.myval);
    // this.el.nativeElement.value = 'Test';
    this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.myval = parseFloat(this.myval).toFixed(2);
    console.log(this.el.nativeElement.myval);
    this.el.nativeElement.innerHTML = this.el.nativeElement.myval;
  }

}
