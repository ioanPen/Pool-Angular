import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CourseDto } from '../../models';
import { Courseservice } from '../../services/courseservice';

@Component({
  selector: 'app-courses',
  imports: [RouterLink],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {

  courses: CourseDto[] = [];

  constructor(private courseService: Courseservice) { }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((data) => {
      this.courses = data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    });

  }

}
