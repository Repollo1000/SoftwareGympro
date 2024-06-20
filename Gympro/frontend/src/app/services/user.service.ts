import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

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
}
function tap(arg0: (response: { token: string; }) => void): import("rxjs").OperatorFunction<Object, any> {
  throw new Error('Function not implemented.');
}

