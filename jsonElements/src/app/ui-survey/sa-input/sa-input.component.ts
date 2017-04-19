import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Subject} from "rxjs";
@Component({
  selector: 'sa-input',
  templateUrl: './sa-input.component.html',
  styleUrls: ['./sa-input.component.css']
})
export class SaInputComponent implements OnInit, OnChanges {

  @Input() _value: any = '';
  // @Input()
  // public placeholder:string;
  @Input()
  public role:string='';

  _saNgOnInit:Subject<any> = new Subject<any>();
  public  get saNgOnInit():any{
    return this._saNgOnInit.asObservable();
  }

  _saNgOnChanges:Subject<any> = new Subject<any>();
  public  get saNgOnChanges():any{
    return this._saNgOnChanges.asObservable();
  }

  /**
   * @input {string} The text value of the input.
   */
  @Input()
  get value() {
    return this._value;
  }
  set value(val: any) {
      this._value = val;
  }



@Output()
saValueChanged?:EventEmitter<any> = new EventEmitter();
// @Output()
  // valueChanged?:EventEmitter<any> = new EventEmitter();
  constructor() {

  }

// onClick(e){
//   console.log('clicked default empty function');
// }

  ngOnInit() {
    this._saNgOnInit.next(true);
  }

  valueChanged($event){
    this.saValueChanged.emit($event);
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log('changes', changes);
    this._saNgOnChanges.next(changes)
  }
}
