import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private stateData: boolean = false;

  get state() {
    return this.stateData;
  }

  constructor() { }

  setMenuState(status: boolean) {
    this.stateData = status;
  }
  
}
