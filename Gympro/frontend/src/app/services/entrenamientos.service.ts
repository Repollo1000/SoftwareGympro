import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntrenamientosService { // Corregido el nombre del servicio
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getEntrenamientos(): Observable<any[]> {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('No se ha encontrado token de autenticación en el localStorage.');
    }

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    return this.http.get<any[]>(`${this.apiUrl}/entrenamientos`, { headers }).pipe(
      tap(data => console.log('Datos de entrenamientos recibidos:', data)),
      catchError(this.handleError)
    );
  }

  guardarEntrenamiento(entrenamientoData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/entrenamientos`, entrenamientoData);
  }

  private handleError(error: any) {
    console.error('Error en la solicitud:', error);
    return throwError(error);
  }
}
