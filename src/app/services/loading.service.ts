import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingStatus: boolean = false;

  get status() {
    return this.loadingStatus;
  }

  constructor() { }

  setStatus(status: boolean) {
    this.loadingStatus = status;
  }
}
