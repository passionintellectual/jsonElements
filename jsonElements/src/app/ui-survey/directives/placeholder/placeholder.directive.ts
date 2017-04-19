import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { SetterFn } from '@angular/compiler/src/private_import_core';
import {ChangeDetectorRef, Directive, HostBinding, Input, ViewContainerRef} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Directive({
  selector: '[placeholder]'
})
export class PlaceholderDirective {
  // private _placeholder : string;
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
// component:any;

  constructor(private _view: ViewContainerRef) {
   // this.placeholderChanged  = new BehaviorSubject('');
   //
   //  setTimeout(()=>{
   //    this.placeholder = "Newyork"
   //  }, 3000)
  }

  // ngOnInit() {
  //   this.component = (<any>this._view)._element.component;
  //   this.component.placeholderChanged = this.placeholderChanged;
  //   this.component.placeholder = this.placeholder;
  //
  //   //TODO: add initialization code here
  // }

}
