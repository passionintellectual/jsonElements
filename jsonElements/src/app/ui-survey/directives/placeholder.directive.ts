import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { SetterFn } from '@angular/compiler/src/private_import_core';
import { ChangeDetectorRef, Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[placeholder]'
})
export class PlaceholderDirective {
  @Input()
@HostBinding('attr.data-placeholder')

 private _placeholder : string;
 public get placeholder() : string {
   return this._placeholder;
 }
 public set placeholder(v : string) {
   this._placeholder = v;
   debugger;
  this.chRef.detectChanges();
 }


  constructor(private chRef: ChangeDetectorRef) {}

}
