import { NestedCourseDto } from "./nested-course-dto";

export interface StudentDto {
  id: number;
  name: string;
  surname: string;
  departmentId: number;
  courses: NestedCourseDto;
}
