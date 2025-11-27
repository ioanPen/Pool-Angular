import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseDto } from '../models';

@Injectable({
  providedIn: 'root',
})
export class Courseservice {


  constructor(private httpClient: HttpClient) {}

  getAllCourses(): Observable<CourseDto[]>
  {
    return this.httpClient.get<CourseDto[]>('http://localhost:8080/api/courses',{withCredentials: true});
  }

  getCourse(id: number): Observable<CourseDto>{
    return this.httpClient.get<CourseDto>(`http://localhost:8080/api/courses/${id}`,{withCredentials: true});
  }

}
