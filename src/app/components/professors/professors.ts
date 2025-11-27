import { Component } from '@angular/core';
import { DepartmentDto, ProfessorDto } from '../../models';
import { Professorservice } from '../../services/professorservice';
import { RouterLink } from '@angular/router';
import { DepartmentService } from '../../services/departmentservice';

@Component({
  selector: 'app-professors',
  imports: [RouterLink],
  templateUrl: './professors.html',
  styleUrl: './professors.css',
})
export class Professors {

  professors: ProfessorDto[] = [];
  departments: DepartmentDto[] = []

  constructor(
    private professorService: Professorservice,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.professorService.getAllProfessors().subscribe((data)=> {this.professors = data;});
    this.departmentService.getAllDepartments().subscribe((data) => { this.departments = data;});
  }


}
