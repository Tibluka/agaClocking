import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private statusData = new BehaviorSubject<boolean>(false);

  get status() {
    return this.statusData;
  }

  constructor() { }

  setStatus(status: boolean) {
      this.statusData.next(status);
  }
}
