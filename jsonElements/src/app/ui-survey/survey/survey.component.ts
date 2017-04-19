import { SaComponentComponent } from '../sa-component/sa-component.component';
import { Declaration } from '@angular/compiler/src/i18n/serializers/xml_helper';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  @Input() config:any;
  @Input() answers:any = {};
  @Input() saevents:any = {};
// @Output() answersChanged:EventEmitter<any>;
  constructor() { }

  ngOnInit() {
    this.answers[this.config[0].itemId] = 'ppp';
  }

  answerChanged(val){
    console.log('in survey answerChanged', val);
  }

}
