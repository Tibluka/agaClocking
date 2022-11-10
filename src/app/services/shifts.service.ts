import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  private shifsData: Array<any> = [];

  get shifts() {
    return this.shifsData;
  }

  constructor() { }
}
