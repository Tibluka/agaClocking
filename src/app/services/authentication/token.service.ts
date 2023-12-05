import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

interface Token {
  access_token: string,
  token_type: string,
  expires_in: number
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  async setToken() {
    try {
      let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', `Basic ${environment.token}`),
      };
      let httpParams = new HttpParams().append('grant_type', 'client_credentials');
      const response = await this.http.post<Token>(`${environment.tokenUrl}/access-token`, httpParams, options).toPromise();
      localStorage.setItem('cbp_tkn', response.access_token);
    } catch (error) {

    }
  }

}

