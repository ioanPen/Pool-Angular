import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatHint, MatError } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { LoginDTO } from '../../models/login-dto';
import { Security } from '../../services/security';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MatFormField, MatLabel, MatHint, MatError, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(
    private security: Security,
    private router: Router
  ) { }

  username = '';
  password = '';
  error = '';

  submit() {
    const req: LoginDTO = {
      username: this.username,
      password: this.password
    };
    console.log("SUBMIT CLICKED");
    console.log("Username:", this.username);
    console.log("Password:", this.password);
    this.security.login(req).subscribe({
      next: (user) => {
        console.log('Logged in:', user);
        this.router.navigate(['/']);
      },
      error: () => {
        this.error = 'Invalid username or password';
      }
    });
  }

}

