import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Security } from '../../services/security';

@Component({
  selector: 'app-logout',
  template: `<p>Logging out...</p>`,
})
export class Logout {
  constructor(private security: Security, private router: Router) {
    this.security.logout();         // remove token
    this.router.navigate(['/login']); // navigate to login page
    console.log("Logged out");
  }
}
