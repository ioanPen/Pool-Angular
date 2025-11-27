import { Component } from '@angular/core';
import { DepartmentDto } from '../../models';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DepartmentService } from '../../services/departmentservice';


@Component({
  selector: 'app-department',
  imports: [RouterLink],
  templateUrl: './department.html',
  styleUrl: './department.css',
})
export class Department {

  department: DepartmentDto | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService
  ) {     console.log("dep page loads");
}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.departmentService.getDepartment(id).subscribe({
      next: (data) => this.department = data,
      error: () => this.router.navigate(['/404'])
    });

  }

}
