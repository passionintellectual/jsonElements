import { ISaElement } from '../interfaces/isa-element';
import { SaElementComponentProviderService } from './../services/SaElementComponentProvider.service';
import { ISaConfig } from '../interfaces/isa-config';
import { ISaElementComponentProvider } from '../interfaces/isa-element-component-provider';
import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {MdInputContainer} from "@angular/material";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sa-component',
  templateUrl: './sa-component.component.html',
  styleUrls: ['./sa-component.component.css']
})
export class SaComponentComponent implements OnInit,
AfterViewInit {
  @Input()config: any;

constructor(private saElProvider: SaElementComponentProviderService
, private viewContainer: ViewContainerRef) {}

  ngAfterViewInit() {
    var aggregatedConfig = this.aggregate();
    this.loadSaElement();
  }
  aggregate(){

    return this.config;
  }
  loadSaElement(){

// < md-input-container class = "example-full-width" >
// <input mdInput placeholder="City">
// </md-input-container>

this.config.component = MdInputContainer;
    // if(!this.config.component){
    //   throw new Error('Component type to resolve found undefined or null.')
    // }
    // //Get sa element comonent instance.
    //  var saEl = this.saElProvider.getSaElement(this.config.component);
    // //Assigning properties of the sa element component instance
    // // saEl.loadConfig(<ISaConfig>this.config);
  }
  ngOnInit() {}

}
