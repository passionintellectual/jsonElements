import { SaComponentComponent } from '../sa-component/sa-component.component';
import { Declaration } from '@angular/compiler/src/i18n/serializers/xml_helper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class SurveyComponent implements OnInit {
  @Input() config:any;

  constructor() { }

  ngOnInit() {
  }

}
