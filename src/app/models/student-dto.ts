import { NestedCourseDto } from "./nested-course-dto";
import { NestedDepartmentDto } from "./nested-department-dto";

export interface StudentDto {
  id: number;
  name: string;
  surname: string;
  departmentId: number;
  courses: NestedCourseDto[];
}
