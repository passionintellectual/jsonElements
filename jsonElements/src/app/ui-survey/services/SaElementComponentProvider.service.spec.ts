/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SaElementComponentProviderService } from './SaElementComponentProvider.service';

describe('Service: SaElementComponentProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaElementComponentProviderService]
    });
  });

  it('should ...', inject([SaElementComponentProviderService], (service: SaElementComponentProviderService) => {
    expect(service).toBeTruthy();
  }));
});