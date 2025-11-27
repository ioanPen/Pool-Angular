import { Component } from '@angular/core';
import { DepartmentDto, StudentDto } from '../../models';
import { Studentservice } from '../../services/studentservice';
import { RouterLink } from '@angular/router';
import { DepartmentService } from '../../services/departmentservice';

@Component({
  selector: 'app-students',
  imports: [RouterLink],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {

  departments: DepartmentDto[] = [];
  students: StudentDto[] = [];

  constructor(
    private studentService: Studentservice,
    private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data) => { this.students = data; });
    this.departmentService.getAllDepartments().subscribe((data)=> {this.departments =data;});
  }

}
