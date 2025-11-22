import { NestedCourseDto } from "./nested-course-dto";
import { NestedProfessorDto } from "./nested-professor-dto";
import { NestedStudentDto } from "./nested-student-dto";

export interface DepartmentDto {
  id: number;
  name: string;
  professors: NestedProfessorDto[];
  courses: NestedCourseDto[];
  students: NestedStudentDto[];

}
