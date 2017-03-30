import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { SetterFn } from '@angular/compiler/src/private_import_core';
import { ChangeDetectorRef, Directive, HostBinding, Input } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Directive({
  selector: '[placeholder]'
})
export class PlaceholderDirective {
  private _placeholder : string;
public placeholderChanged:BehaviorSubject<string> = new BehaviorSubject('');
  @Input()
@HostBinding('attr.data-placeholder')

 public get placeholder() : string {
   // return this._placeholder;
    return this.placeholderChanged.getValue();
 }
 public set placeholder(v : string) {
   // this._placeholder = v;
   this.placeholderChanged.next(v);

 }


  constructor(private chRef: ChangeDetectorRef) {
   this.placeholderChanged  = new BehaviorSubject('');

    setTimeout(()=>{
      this.placeholder = "Newyork"
    })
  }

}
