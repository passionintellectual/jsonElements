import { RouterModule } from '@angular/router';
import { ExamplePageComponent } from './example-page/example-page.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '@angular/material';
import { ExamplesRoutingModule } from './example-page.routing';
import { InputHelpComponent } from './input-help/input-help.component';
import { ConfigEditableComponent } from './config-editable/config-editable.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
imports : [
  CommonModule, MaterialModule, RouterModule, ExamplesRoutingModule, NgbModule, FormsModule,
  LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        })
],
declarations: [
    ExamplePageComponent
    , ConfigEditableComponent
    , InputHelpComponent


],
  providers: [

  ]
})
export class ExamplesModule {}
