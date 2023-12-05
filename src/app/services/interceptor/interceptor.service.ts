import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenService } from '../authentication/token.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler | any) {
    const authToken = localStorage.getItem('cbp_tkn');
    if (authToken && !req.url.includes('oauth')) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`).set('tokenSMSession', 'SMSESSION=' + this.getCookie())
      });
      return next.handle(authReq).pipe(
        catchError(x => {
          if (x.status == 401) {
            this.tokenService.setToken();
          }
          return throwError(x);
        })
      );
    } else return next.handle(req);
  }


  getCookie() {
    const promoParams = JSON.parse(localStorage.getItem('promoParams'));
    return promoParams.smsession;
  }

}
