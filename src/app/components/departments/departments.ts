import { Component } from '@angular/core';
import { DepartmentDto } from '../../models';
import { DepartmentService } from '../../services/departmentservice';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-departments',
  imports: [RouterLink],
  templateUrl: './departments.html',
  styleUrl: './departments.css',
})
export class Departments {

  departments: DepartmentDto[] = [];

  constructor(private departmentService: DepartmentService){}

  ngOnInit(): void
  {
    this.departmentService.getAllDepartments().subscribe((data) => {this.departments = data;}
    );
  }

}
