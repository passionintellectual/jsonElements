import { ISaElement } from '../interfaces/isa-element';
import { ISaConfig } from '../interfaces/isa-config';
import { ISaElementComponentProvider } from './../interfaces/isa-element-component-provider';
import { Injectable } from '@angular/core';

@Injectable()
export class SaElementComponentProviderService implements ISaElementComponentProvider {

    constructor() {

    }

    public getSaElement(config: ISaConfig): ISaElement {
        throw 'Not Implemented';
    }
}
