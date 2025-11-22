import { NestedCourseDto } from "./nested-course-dto";
import { NestedDepartmentDto } from "./nested-department-dto";

export interface ProfessorDto {
  id: number;
  name: string;
  surname: string;
  department: NestedDepartmentDto;
  courses: NestedCourseDto;
}
