import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { ProfessorDto } from '../../models';
import { Professorservice } from '../../services/professorservice';

@Component({
  selector: 'app-professor',
  imports: [RouterLink],
  templateUrl: './professor.html',
  styleUrl: './professor.css',
})
export class Professor {

  professor: ProfessorDto | null = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private professorService: Professorservice
  ){    console.log("Professor page loads");
}

  ngOnInit(): void
  {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.professorService.getProfessor(id).subscribe({
      next: (data) => this.professor = data,
      error: () => this.router.navigate(['/404'])
    });

  }

}
