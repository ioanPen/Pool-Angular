import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Departments } from './features/departments/departments';
import { Courses } from './features/courses/courses';
import { Professors } from './features/professors/professors';
import { Login } from './features/login/login';
import { Logout } from './features/logout/logout';
import { Students } from './features/students/students';

export const routes: Routes = [
  { path: 'home', component: Home},
  { path: 'departments', component: Departments},
  { path: 'courses', component: Courses},
  { path: 'professors', component: Professors},
  { path: 'students', component: Students},
  { path: 'login', component: Login},
  { path: 'logout', component: Logout},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];
