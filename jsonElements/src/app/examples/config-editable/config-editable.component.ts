import { ConfigRepositoryService } from './config-editable.service';
import { PrettyPrintPipe } from './json-prettify';
import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
@Component({
  selector: 'config-editable',
  templateUrl: 'config-editable.component.html',
  styleUrls: ['config-editable.component.css'],
  providers: [ConfigRepositoryService]
})
export class ConfigEditableComponent implements OnChanges{

  _json: any;
  _defaultJson:any;
  @Input()
  get json(): any {
    return this._json;
  }
  set json(value: any) {
    if (value) {
      //var val = JSON.stringify(value,null, 4);
      this._json = value;

    } else {
      this._json = '{}';
    }
  }

  @Input()
  get defaultJson(): any {
    return this._defaultJson;
  }
  set defaultJson(value: any) {
    if (value) {
      //var val = JSON.stringify(value,null, 4);
      this._defaultJson = value;

    } else {
      this._defaultJson = '{}';
    }
  }

  @Input() key: any;
  constructor(private configRepositoryService: ConfigRepositoryService) {

  }
  ngOnChanges(changes: {changes: SimpleChange}) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add 'implements OnChanges' to the class.
    this.configRepositoryService.save(this.key, this.json);


  }

}
