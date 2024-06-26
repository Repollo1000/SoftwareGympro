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
  /*guardarEvaluacion(claseData: any) {
    return this.http.post('http://localhost:3000/api', claseData);
  }
    */

  guardarEvaluacion(evaluacionData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

    return this.http.post(`${this.apiUrl}/evaluacion-corporal`, evaluacionData, { headers }).pipe(
      tap((response: any) => console.log('Evaluación guardada exitosamente', response)),
      catchError((error: any) => {
        console.error('Error al guardar la evaluación', error);
        throw error;
      })
    );
  }
}
  

