import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Studentservice } from '../../services/studentservice';
import { DepartmentDto, StudentDto } from '../../models';
import { DepartmentService } from '../../services/departmentservice';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-student',
  imports: [RouterLink],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {

  student: StudentDto | null = null;
  studentPasses: boolean | null = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private studentService: Studentservice,
    private departmentService: DepartmentService
  ) {     console.log("Student page loads");
}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.studentService.getStudent(id).pipe(
      switchMap(student => {
        this.student = student;
        return this.studentService.getStudentPasses(student.id);
      })
    ).subscribe({
      next: (isPassing) => this.studentPasses = isPassing,
      error: () => this.router.navigate(['404'])
    });

  }

}
