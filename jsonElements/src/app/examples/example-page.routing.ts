import { ExamplePageComponent } from './example-page/example-page.component';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputHelpComponent } from "./input-help/input-help.component";
const examplesRoutes : Routes = [
   {
    path: '',
    component: ExamplePageComponent,
    children: [
      {
        path: '',
        component: InputHelpComponent
      },
      {
        path: 'input',
        component: InputHelpComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(examplesRoutes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
