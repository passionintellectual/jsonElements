import { SaComponentFactoryProvider } from './services/sa-component-factory-provider.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SurveyComponent} from './survey/survey.component';
import {SaComponentComponent} from './sa-component/sa-component.component';
import {MaterialModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SaInputComponent } from './sa-input/sa-input.component';
import { PlaceholderDirective } from './directives/placeholder/placeholder.directive';
import {NgModelDirective} from "./directives/ngmodel/ng-model.directive";
import { FormsModule } from '@angular/forms';

@NgModule({
imports : [
  CommonModule, MaterialModule, NgbModule, FormsModule
],
entryComponents:[SaInputComponent],
  providers: [
     SaComponentFactoryProvider
  ],
  declarations: [SurveyComponent, SaComponentComponent, SaInputComponent, PlaceholderDirective, NgModelDirective
  ],
  exports:[SurveyComponent, SaComponentComponent]
})
export class UiSurveyModule {}
