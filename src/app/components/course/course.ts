import { Component } from '@angular/core';
import { CourseDto } from '../../models';
import { Courseservice } from '../../services/courseservice';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  imports: [RouterLink],
  templateUrl: './course.html',
  styleUrl: './course.css',
})

export class Course {

  course: CourseDto | null = null;
  courses: CourseDto[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private courseService: Courseservice,
  ) {    console.log("course page loads");
 }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.courseService.getCourse(id).subscribe({
      next: (data) => this.course = data,
      error: () => this.router.navigate(['/404'])
    });
  }


}
