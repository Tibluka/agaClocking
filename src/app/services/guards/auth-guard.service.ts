import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const authenticated = localStorage.getItem('user_agaclocking');
    if (authenticated) {
      return true;
    } else if (state.url.includes('?thanks=true')) {
      this.router.navigate(['/thanks']);
      return false;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
