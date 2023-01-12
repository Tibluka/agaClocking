import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData: { id: number, name: string, userType: string } = null;

  get user() {
    return this.userData;
  }

  constructor() {
    const user = JSON.parse(localStorage.getItem('user_agaclocking'));
    if (user) this.userData = user;
  }
}
