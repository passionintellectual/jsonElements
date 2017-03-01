import { ISaConfig } from './isa-config';
import { ISaElement } from './isa-element';
export interface ISaElementComponentProvider{
  getSaElement(config: ISaConfig):ISaElement;

}
