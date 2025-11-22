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

export const routes: Routes = [
  { path: '', component: Home},

  { path: 'courses', component: Courses},
  { path: 'departments', component: Departments},
  { path: 'departments/:id', component: Department},
  { path: 'professors', component: Professors},
  { path: 'students', component: Students},

  { path: 'login', component: Login},
  { path: 'logout', component: Logout},

  { path: '**', component: Empty}
];
