import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfessorDto } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Professorservice {

  constructor(private httpClient: HttpClient){}

  getAllProfessors(): Observable<ProfessorDto[]>
  {
    return this.httpClient.get<ProfessorDto[]>('http://localhost:8080/api/professors',{withCredentials: true});
  }

  getProfessor(id: number): Observable<ProfessorDto>
  {
    return this.httpClient.get<ProfessorDto>(`http://localhost:8080/api/professors/${id}`,{withCredentials: true});
  }

}
