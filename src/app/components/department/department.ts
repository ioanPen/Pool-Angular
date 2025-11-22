import { Component } from '@angular/core';
import { DepartmentDto } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../../services/departmentservice';


@Component({
  selector: 'app-department',
  imports: [],
  templateUrl: './department.html',
  styleUrl: './department.css',
})
export class Department {

  department: DepartmentDto | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.departmentService.getDepartment(id).subscribe({
      next: (data) => this.department = data,
      error: () => this.router.navigate(['/404'])
    });

  }

}
