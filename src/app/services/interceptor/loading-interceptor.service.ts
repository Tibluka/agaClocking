import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from '../loading/loading.service';
import { catchError, finalize, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService {

  get blockedUrls() {
    return [
      '/oauth/v2/access-token'
    ]
  }

  constructor(private loadingService: LoadingService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const blockedUrl = this.blockedUrls.find(u => req.url.includes(u))
    if (!blockedUrl) {
      this.loadingService.setStatus(true);
      console.log(this.loadingService.status)
    }
    return next.handle(req).pipe(
      finalize(()=>{
        this.loadingService.setStatus(false);
      }),
      catchError((error) => {
        return throwError(error);
      })
    )
  }
}
