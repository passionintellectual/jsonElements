import { SaElementComponentProviderService } from './../services/SaElementComponentProvider.service';
import { ISaConfig } from '../interfaces/isa-config';
import { ISaElementComponentProvider } from '../interfaces/isa-element-component-provider';
import { AfterViewInit, Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sa-component',
  templateUrl: './sa-component.component.html',
  styleUrls: ['./sa-component.component.css']
})
export class SaComponentComponent implements OnInit,
AfterViewInit {
  @Input()config: any;

constructor(private saEl: SaElementComponentProviderService) {}

  ngAfterViewInit() {
    this.loadSaElement();
  }

  loadSaElement(){
    //  var saEl = this.saElProvider.getSaElement(this.config);
    //  saEl.loadConfig(<ISaConfig>this.config);
  }
  ngOnInit() {}

}
