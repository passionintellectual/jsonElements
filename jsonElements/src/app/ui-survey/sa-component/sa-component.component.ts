import { DirectiveResolver } from '@angular/compiler';
import { PlaceholderDirective } from '../directives/placeholder/placeholder.directive';
import { SaComponentFactoryProvider } from './../services/sa-component-factory-provider.service';
import { ISaComponentFactoryProvider } from './../interfaces/isa-component-factory-provider';
import { SaInputComponent } from './../sa-input/sa-input.component';
import { ISaElement } from '../interfaces/isa-element';
import { ISaConfig } from '../interfaces/isa-config';
import {
  AfterViewInit,
  Component, EventEmitter,
  Inject,
  Input,
  OnInit, Output,
  ViewContainerRef
} from '@angular/core';
import { MdInputContainer } from "@angular/material";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sa-component',
  templateUrl: './sa-component.component.html',
  styleUrls: ['./sa-component.component.css']
})
export class SaComponentComponent implements OnInit,
  AfterViewInit {
  @Input() config: any;
  @Input() saevents: any;

  constructor(private saElProvider: SaComponentFactoryProvider
    , private viewContainer: ViewContainerRef) {
  }

  @Input() value: any;
  component: any;

  ngAfterViewInit() {

    var aggregatedConfig = this.aggregate();
    this.loadSaElement();
  }

  aggregate() {

    return this.config;
  }

  ngOnChanges() {
    this.loadSaElement();
  }
  createComponent(saEl: any) {
    var component = this.viewContainer.createComponent(saEl);
    component.instance['saNgOnInit'].subscribe((x) => {
      console.log('ngOnInit called');



      Object.keys(this.config.outputs).map(itm => {
        if (itm === 'saValueChanged') {
          component.instance[itm].subscribe(x => {
            this.config.outputs[itm].call(null, x);
          });
        }
      });

      console.log('this keys', Object.keys(this));



      component.instance['value'] = this.value;
      console.log('keys assigned', Object.keys(component.instance));

    });

    component.instance['saNgOnChanges'].subscribe((x) => {
      console.log('saNgOnChanges called', x);

    });

    // component.instance['close'].subscribe(() => {
    //   component.destroy();
    // });

    this.component = component;
    return component;
  }
  copySelfProperties(component){
     Object.keys(this).map((itm) => {
        console.log('in config ', this.config[itm]);
        if (['config', 'viewContainer', 'saElProvider', 'placeholder'].indexOf(itm) == -1) {
          console.log('Assigning this property', itm);
          component.instance[itm] = this[itm];
        }
      });
  }
  loadSaElement() {

    // < md-input-container class = "example-full-width" >
    // <input mdInput placeholder="City">
    // </md-input-container>

    this.config.component = 'SaInputComponent';
    if (!this.config.component) {
      throw new Error('Component type to resolve found undefined or null.')
    }
    this.config.component = SaInputComponent;
    var saEl = this.saElProvider.getFactory(this.config.component);

    var component = this.component || this.createComponent(saEl);
    this.configToProperties(component);
    this.copySelfProperties(component);



  }

  configToProperties(component: any) {
    Object.keys(this.config).map((itm) => {
      if (['outputs','placeholder'].indexOf(itm) == -1) {
        component.instance[itm] = this.config[itm];
      }
    });

    setTimeout(()=>{
      debugger;
    component.instance['placeholder'] = 'ganesh123';

    })
  }
  ngOnInit() {

  }

}
