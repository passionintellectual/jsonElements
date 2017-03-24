import { SaComponentFactoryProvider } from './sa-component-factory-provider.service';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

describe('Service: SaElementComponentProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaComponentFactoryProvider]
    });
  });

  it('should ...', inject([SaComponentFactoryProvider], (service: SaComponentFactoryProvider) => {
    expect(service).toBeTruthy();
  }));
});
