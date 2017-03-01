import { SaComponentComponent } from './ui-survey/sa-component/sa-component.component';
import { SurveyComponent } from './ui-survey/survey/survey.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { UiSurveyModule } from './ui-survey/ui-survey.module';

import { AppComponent } from './app.component';
import { SurveyExamplePageComponent } from './survey-example-page/survey-example-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyExamplePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  UiSurveyModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
