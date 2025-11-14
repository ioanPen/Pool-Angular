import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatHint, MatError } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  imports: [MatFormField, MatLabel, MatHint, MatError],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
