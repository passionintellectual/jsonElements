import { ISaConfig } from './../ui-survey/interfaces/isa-config';
import { Component, Input, OnInit } from '@angular/core';

@Component({selector: 'app-survey-example-page',
templateUrl: './survey-example-page.component.html',
styleUrls: ['./survey-example-page.component.css']

})
export class SurveyExamplePageComponent implements OnInit {
  @Input() questionnaire: any;
  @Input() answers:any;
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
        'section': false,
        'minlength': 2,
        'maxlength': 5,
        'role':'Roeld',
        'component': 'SaInputComponent',
        'outputs':{
          'saValueChanged':(x)=> {
            console.log('success changed the value to :', x);
            this.answers['185511'] = x;
          },
        'onMouseOver':(x)=>{
          console.log('mouse over ', x);
        },
        'onClick':(x)=>{
          console.log('Click ', x);
        }
      }
      }
    ];

    this.answers={};
  }

  ngOnInit() {}

}
