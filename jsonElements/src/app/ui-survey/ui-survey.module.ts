import {ISaElementComponentProvider} from './interfaces/isa-element-component-provider';
import {SaElementComponentProviderService} from './services/SaElementComponentProvider.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SurveyComponent} from './survey/survey.component';
import {SaComponentComponent} from './sa-component/sa-component.component';
import {MaterialModule} from '@angular/material';
@NgModule({
imports : [
  CommonModule, MaterialModule
],
  providers: [
     SaElementComponentProviderService
  ],
  declarations: [SurveyComponent, SaComponentComponent],
  exports:[SurveyComponent, SaComponentComponent]
})
export class UiSurveyModule {}
