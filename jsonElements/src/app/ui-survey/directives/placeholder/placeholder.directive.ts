import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { SetterFn } from '@angular/compiler/src/private_import_core';
import { ChangeDetectorRef, Directive, HostBinding, Input, ViewContainerRef, Component } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { element } from 'protractor';

@Directive({
  selector: '[placeholder]'
})
export class PlaceholderDirective {
    parentComponent: any;
//   // private _placeholder : string;
public placeholderChanged:BehaviorSubject<string> = new BehaviorSubject('');
  @Input()
@HostBinding('attr.data-placeholder')
 public get placeholdernew() : string {
   // return this._placeholder;
    // return this.placeholderChanged.getValue();
    return this.parentComponent.placeholdernew;
 }
 public set placeholdernew(v : string) {
   // this._placeholder = v;
   this.placeholderChanged.next(v);
        this.parentComponent.placeholdernew = v;


 }
// // component:any;

  constructor(private vcRef: ViewContainerRef) {
   // this.placeholderChanged  = new BehaviorSubject('');
   //
   //  setTimeout(()=>{
   //    this.placeholder = "Newyork"
   //  }, 3000)
   debugger;

  }

   ngOnInit() {
     this.parentComponent = (<any>this.vcRef.injector)._view.context;
    //  parentComponent.placeholdernew = 'newyork';
  //   this.component = (<any>this._view)._element.component;
  //   this.component.placeholderChanged = this.placeholderChanged;
  //   this.component.placeholder = this.placeholder;
  //
  //   //TODO: add initialization code here
   }

}
