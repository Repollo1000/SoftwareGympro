import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorporalService {

  private apiUrl = 'http://localhost:3000/api'; // Ajusta la URL según tu configuración

  constructor(private http: HttpClient) { }

  getCorporal(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
  
    return this.http.get<any[]>(`${this.apiUrl}/corporal`, { headers }).pipe(
      tap(data => console.log('Datos de corporal recibidos:', data)),
      catchError((error: any) => {
        console.error('Error al obtener las evaluaciones corporales:', error);
        throw error;
      })
    );
  }
}
