import { ISaElement } from '../interfaces/isa-element';
import { ISaConfig } from '../interfaces/isa-config';
import { ISaElementComponentProvider } from './../interfaces/isa-element-component-provider';
import { ComponentFactoryResolver, Injectable } from '@angular/core';

@Injectable()
export class SaElementComponentProviderService implements ISaElementComponentProvider {

constructor(private componentFactoryResolver: ComponentFactoryResolver) {

    }

    public getSaElement(cmpnt): any {
        this
          .componentFactoryResolver
          .resolveComponentFactory(cmpnt);

    }
}
