import { AppRoutingModule } from './../../.history/src/app/app-routing/app-routing.module_20170301194750';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { SurveyExamplePageComponent } from './survey-example-page/survey-example-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyExamplePageComponent,
    PageNotFoundComponent,
    RouterOutlet
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
