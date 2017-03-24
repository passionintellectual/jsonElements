import { Injectable } from '@angular/core';
import {  LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class ConfigRepositoryService {

  constructor(private localStorageService: LocalStorageService) { }
  save(key, json){
    this.localStorageService.set(key, json);
  }

  get(key){
    return this.localStorageService.get(key);
  }

  exists(key){
    throw new Error('not yet implemented.');
  }
}
