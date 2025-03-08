import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://fakeapi.platzi.com/auth';

  constructor(private http: HttpClient) {}

  register(user: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  login(credentials: { email: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}