import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartmentDto } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) {}

  getAllDepartments(): Observable<DepartmentDto[]> {
    return this.httpClient.get<DepartmentDto[]>('http://localhost:8080/api/departments',{withCredentials: true});
  }

  getDepartment(id: number): Observable<DepartmentDto> {
    return this.httpClient.get<DepartmentDto>(`http://localhost:8080/api/departments/${id}`,{withCredentials: true});
  }
}
