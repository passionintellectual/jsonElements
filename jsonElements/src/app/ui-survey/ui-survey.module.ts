import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey/survey.component';
import { SaComponentComponent } from './sa-component/sa-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SurveyComponent, SaComponentComponent]
})
export class UiSurveyModule { }
