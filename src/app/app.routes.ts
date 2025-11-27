import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Departments } from './components/departments/departments';
import { Courses } from './components/courses/courses';
import { Professors } from './components/professors/professors';
import { Login } from './components/login/login';
import { Logout } from './components/logout/logout';
import { Students } from './components/students/students';
import { Department } from './components/department/department';
import { Empty } from './components/empty/empty';
import { Course } from './components/course/course';
import { Professor } from './components/professor/professor';
import { Student } from './components/student/student';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: Home},

  { path: 'courses', component: Courses, canActivate: [AuthGuard]},
  { path: 'courses/:id', component: Course, canActivate: [AuthGuard]},
  { path: 'departments', component: Departments, canActivate: [AuthGuard]},
  { path: 'departments/:id', component: Department, canActivate: [AuthGuard]},
  { path: 'professors', component: Professors, canActivate: [AuthGuard]},
  { path: 'professors/:id', component: Professor, canActivate: [AuthGuard]},
  { path: 'students', component: Students, canActivate: [AuthGuard]},
  { path: 'students/:id', component: Student, canActivate: [AuthGuard]},

  { path: 'login', component: Login},
  { path: 'logout', component: Logout},

  { path: '**', component: Empty},

];
