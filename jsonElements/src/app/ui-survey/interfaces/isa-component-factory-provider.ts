import { ISaConfig } from './isa-config';
import { ISaElement } from './isa-element';
export interface ISaComponentFactoryProvider{
  getFactory(config: ISaConfig):any;

}
