import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaComponentComponent } from './sa-component.component';

describe('SaComponentComponent', () => {
  let component: SaComponentComponent;
  let fixture: ComponentFixture<SaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
