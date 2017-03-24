import { Component } from '@angular/core';

@Component({
    selector: 'input-help',
    templateUrl: 'input-help.component.html',
    styleUrls: ['input-help.component.scss'],


})
export class InputHelpComponent {
    defaultConfig: { answerType: string; label: string; };
  _config:any;
  set config(value:any){
    this._config = JSON.stringify(value);
  }

  get config():any{
    return this._config;
  }
  constructor(){
    this.defaultConfig = {
      answerType:'text',
      label:'Enter your name'
    }
  }
}
