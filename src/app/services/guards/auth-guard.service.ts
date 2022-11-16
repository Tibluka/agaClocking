import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate() {
    const authenticated = localStorage.getItem('user_agaclocking');
    if (authenticated) {
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }

}
