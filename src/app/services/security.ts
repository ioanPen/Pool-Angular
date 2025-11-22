import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from '../models/login-dto';
import { UserDTO } from '../models/user-dto';

@Injectable({
  providedIn: 'root',
})
export class Security {

  constructor(private http: HttpClient) {}


  login(loginInfo: LoginDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(`http://localhost:8080/api/login`, loginInfo, {withCredentials: true});
  }

  logout(): Observable<void> {
    return this.http.post<void>(`http://localhost:8080/api/logout`, {}, {withCredentials: true});
  }

}






