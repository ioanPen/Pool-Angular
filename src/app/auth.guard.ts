import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Security } from './services/security';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private security: Security, private router: Router) {}

  canActivate(): boolean {
    const token = this.security.getToken();
    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
