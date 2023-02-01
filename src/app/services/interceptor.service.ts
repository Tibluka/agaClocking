import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, finalize, catchError, delay } from 'rxjs/operators';
import { runInThisContext } from 'vm';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  private requestsOngoing: Array<string> = [];
  private countDelay: boolean = false;

  get loadingStatus() {
    return this.loadingService.status;
  }

  get requests() {
    return this.requestsOngoing.length;
  }

  constructor(private loadingService: LoadingService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler | any): any {
    this.requestsOngoing.push(request.url);
    const index = this.requestsOngoing.findIndex(r => r === request.url);
    if (!this.countDelay) {
      //under development
    }
    return next.handle(request).pipe(
      catchError(error => {
        this.requestsOngoing.splice(index, 1);
        throw error
      })
    ).pipe(
      //delay(10000),
      finalize(() => {
        this.requestsOngoing.splice(index, 1);
      }))
  }

  setIntervalAnimation() {

  }

}
