import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDTO } from '../../models/login-dto';
import { Security } from '../../services/security';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username = '';
  password = '';
  error = '';

  constructor(
    private security: Security,
    private router: Router
  ) {}

  submit() {
    const req: LoginDTO = {
      username: this.username,
      password: this.password
    };

    console.log("SUBMIT CLICKED", req);

    this.security.login(req).subscribe({
      next: (user) => {
        console.log('Logged in:', user);
        this.router.navigate(['/']); // redirect after login
      },
      error: (err) => {
        console.error(err);
        this.error = 'Invalid username or password';
      }
    });
  }
}
