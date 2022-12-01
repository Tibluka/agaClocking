import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedUser = null;

  get user() {
    const user = JSON.parse(localStorage.getItem('user_agaclocking'));
    if (user) { this.loggedUser = user };
    return this.loggedUser;
  }

  constructor(private http: HttpClient) { }

  login(params: { email: string, password: string }) {
    return this.http.post(`${environment.url}/login`, params);
  }

}
