import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient, private authService: AuthService) {}

  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  login(user: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user).pipe(
      tap((response: { token: string; }) => {
        console.log('Token:', response.token); // Verifica que el token es el correcto
        localStorage.setItem('token', response.token);
      })
    );
  }
  getProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile`, {
      headers: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    });
  }

  deleteAccount(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete`, {
      headers: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    });
  }
}
function tap(arg0: (response: { token: string; }) => void): import("rxjs").OperatorFunction<Object, any> {
  throw new Error('Function not implemented.');
}

