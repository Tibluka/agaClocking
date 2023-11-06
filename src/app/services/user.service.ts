import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData: { id: number, name: string, userType: string } = null;
  private userListData = [];

  get userList() {
    return this.userListData;
  }

  get user() {
    return this.userData;
  }

  constructor(private http: HttpClient) {
    const user = JSON.parse(localStorage.getItem('user_agaclocking'));
    if (user) this.userData = user;
  }

  setLoggedUser(user) {
    this.userData = user;
  }

  async createUser(user) {
    try {
      await this.http.post(`${environment.url}/create-user`, user).toPromise();
      return true;
    } catch (error) {
      return false;
    }
  }

  async listUsers() {
    try {
      const { users } = await this.http.get<any>(`${environment.url}/list-users`).toPromise();
      this.userListData = users;
    } catch (error) { }
  }

}
