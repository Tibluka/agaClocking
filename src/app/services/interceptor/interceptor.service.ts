import { HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, finalize } from 'rxjs/operators';
import { LoadingService } from '../loading.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  private requestsOngoing: Array<string> = [];

  get loadingStatus() {
    return this.loadingService.status;
  }

  get requests() {
    return this.requestsOngoing.length;
  }

  constructor(private loadingService: LoadingService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler | any): any {
    this.requestsOngoing.push(request.url);
    const index = this.requestsOngoing.findIndex(r => r === request.url);
    const token = localStorage.getItem('tkn_ack');
    if (token)
      request = request.clone({
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
      })
    setTimeout(() => {
      const requestStillPending = this.requestsOngoing.find(r => r === request.url);
      if (requestStillPending) {
        this.loadingService.setDelayedMessageStatus(true);
      }
    }, 10000);
    return next.handle(request).pipe(
      finalize(() => {
        this.requestsOngoing.splice(index, 1);
        this.loadingService.setDelayedMessageStatus(false);
      }),
      catchError(error => {
        this.requestsOngoing.splice(index, 1);
        this.loadingService.setDelayedMessageStatus(false);
        if (this.requestsOngoing.length === 0) this.loadingService.setStatus(false);
        if (error.error.message === 'Token expirado') {
          alert('Token expirado')
          this.router.navigate(['/login']);
        } else if (error.error.message === 'Token inválido') {
          alert('Token inválido')
          this.router.navigate(['/login']);
        }
        throw error
      })
    )
  }

}
