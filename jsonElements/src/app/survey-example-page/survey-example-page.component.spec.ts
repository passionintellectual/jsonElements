import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyExamplePageComponent } from './survey-example-page.component';

describe('SurveyExamplePageComponent', () => {
  let component: SurveyExamplePageComponent;
  let fixture: ComponentFixture<SurveyExamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyExamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
