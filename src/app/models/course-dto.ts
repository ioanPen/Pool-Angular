import { NestedDepartmentDto } from "./nested-department-dto";
import { NestedProfessorDto } from "./nested-professor-dto";
import { NestedStudentDto } from "./nested-student-dto";

export interface CourseDto {
  id: number;
  name: string;
  mandatory: boolean;
  credits: number;
  durationHours: number;
  department: NestedDepartmentDto;
  professor: NestedProfessorDto;
  students: NestedStudentDto[];
}
