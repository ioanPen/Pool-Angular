import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentDto } from '../models';

@Injectable({
  providedIn: 'root',
})
export class Studentservice {

  constructor(private httpClient: HttpClient){}

  getAllStudents(): Observable<StudentDto[]>{
    return this.httpClient.get<StudentDto[]>('http://localhost:8080/api/students',{withCredentials: true});
  }

  getStudent(id: number): Observable<StudentDto>{
    return this.httpClient.get<StudentDto>(`http://localhost:8080/api/students/${id}`,{withCredentials: true});
  }

  getStudentPasses(id: number): Observable<boolean>{
    return this.httpClient.get<boolean>(`http://localhost:8080/api/students/passes/${id}`,{withCredentials: true});
  }

}
