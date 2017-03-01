import { ISaConfig } from './../ui-survey/interfaces/isa-config';
import { Component, Input, OnInit } from '@angular/core';

@Component({selector: 'app-survey-example-page',
templateUrl: './survey-example-page.component.html',
styleUrls: ['./survey-example-page.component.css']

})
export class SurveyExamplePageComponent implements OnInit {
  @Input() questionnaire: any;

  constructor() {
    this.questionnaire = [
      {
        'label': 'Supplier Company Name',
        'itemId': '185511',
        'externalSystemCorrelationId': 'KI_111098',
        'number': 1,
        'qualifiedNumber': '1.1',
        'answerType': 'ShortText',
        'required': true,
        'editable': true,
        'affectsVisibility': false,
        'precision': 2,
        'allowAttachmentsAndComments': false,
        'vendorFieldMapping': 'vendor.vendorInfo.name1',
        'section': false
      }
    ];
  }

  ngOnInit() {}

}
