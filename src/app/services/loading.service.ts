import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingStatus: boolean = false;
  private messageOnDelayedRequestsData: boolean = false;

  get status() {
    return this.loadingStatus;
  }

  get messageOnDelayedRequests() {
    return this.messageOnDelayedRequestsData;
  }

  constructor() { }

  setStatus(status: boolean) {
    this.loadingStatus = status;
    return status
  }

  setDelayedMessageStatus(status: boolean) {
    this.messageOnDelayedRequestsData = status;
  }

}