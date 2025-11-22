import { Component } from '@angular/core';
import { Security } from '../../services/security';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {

  constructor(
    private security: Security,
  ) {}


  logout() {
  this.security.logout().subscribe(() => {
    console.log("Logged out");
  });
}


}
