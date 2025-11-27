import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from '../models/login-dto';

interface LoginResponse {
  token: string;
  username: string;
  role: string;
  foreignId: number;
}

@Injectable({
  providedIn: 'root',
})
export class Security {

  private tokenKey = 'jwt_token';

  constructor(private http: HttpClient) {}

  login(loginInfo: LoginDTO): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:8080/api/login', loginInfo)
      .pipe(
        tap(res => {
          // Save JWT in localStorage
          localStorage.setItem(this.tokenKey, res.token);
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);


  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
