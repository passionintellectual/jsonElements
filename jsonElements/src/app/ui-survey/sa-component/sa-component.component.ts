import { DirectiveResolver } from '@angular/compiler';
import { PlaceholderDirective } from '../directives/placeholder/placeholder.directive';
import { SaComponentFactoryProvider } from './../services/sa-component-factory-provider.service';
import { ISaComponentFactoryProvider } from './../interfaces/isa-component-factory-provider';
import { SaInputComponent } from './../sa-input/sa-input.component';
import { ISaElement } from '../interfaces/isa-element';
import { ISaConfig } from '../interfaces/isa-config';
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

constructor(private saElProvider: SaComponentFactoryProvider
, private viewContainer: ViewContainerRef  ) {}

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

this.config.component = 'SaInputComponent';
    if(!this.config.component){
      throw new Error('Component type to resolve found undefined or null.')
    }
    this.config.component = SaInputComponent;
     var saEl = this.saElProvider.getFactory(this.config.component);
     var component = this.viewContainer.createComponent(saEl);
     setTimeout(()=>      { debugger;
       // component.instance['placeholderSubject'].next('Cty sub');
       component.instance['placeholder'] = 'CIITTY';
       component.instance['placeholderChanged'].subscribe(x=>{
         console.log('x', x);
       })
     }, 1000 );




  }
  ngOnInit() {}

}
