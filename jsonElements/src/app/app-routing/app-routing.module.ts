import { AppModule } from './../app.module';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { SurveyExamplePageComponent } from './../survey-example-page/survey-example-page.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
const appRoutes : Routes = [
  {
    path: 'examples',
    loadChildren: '../examples/examples.module#ExamplesModule'
  },
  {
    path: 'survey',
    component: SurveyExamplePageComponent
  }, {
    path: '',
    redirectTo: '/survey',
    pathMatch: 'full'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
