import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sa-element',
  template: `test
    <span [ngSwitch]="config.answerType">
      <span *ngSwitchCase="'ShortText'">
        <sa-input 
          [value]="value"
        ></sa-input>
      </span>
      <span *ngSwitchDefault> </span>
    </span>
  `
})
export class SaElementComponent implements OnInit {
  @Input() config: any;
  @Input() value: any;

  constructor() {

  }

  ngOnInit() {

  }
}
