import { ISaComponentFactoryProvider } from './../interfaces/isa-component-factory-provider';
import { ISaElement } from '../interfaces/isa-element';
import { ISaConfig } from '../interfaces/isa-config';
import { ComponentFactoryResolver, Injectable } from '@angular/core';

@Injectable()
export class SaComponentFactoryProvider implements ISaComponentFactoryProvider {

constructor(private componentFactoryResolver: ComponentFactoryResolver) {

    }

    public getFactory(cmpnt): any {

       return this
          .componentFactoryResolver
          .resolveComponentFactory(cmpnt);

    }
}
