import {Component, OnInit, Input} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sa-component',
  templateUrl: './sa-component.component.html',
  styleUrls: ['./sa-component.component.css']
})
export class SaComponentComponent implements OnInit {
  @Input()config: any;
  constructor() {}

  ngOnInit() {}

}
