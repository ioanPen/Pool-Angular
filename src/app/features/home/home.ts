import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

constructor (private api:ApiService){}

ngOnInit()
{
  this.api.getDepartments().subscribe({
    next: (data) => console.log('Departments:', data),
    error: (err) => console.error('Error:',err)
  });
}

}
