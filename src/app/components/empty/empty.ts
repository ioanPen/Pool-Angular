import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-empty',
  imports: [RouterLink, MatButton],
  templateUrl: './empty.html',
  styleUrl: './empty.css',
})
export class Empty {

}
