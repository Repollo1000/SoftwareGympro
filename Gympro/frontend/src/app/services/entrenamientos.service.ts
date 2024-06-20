import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrenamientosService {
  
  private apiUrl = 'http://localhost:3000/api'; // Cambiar a la URL correcta del backend
  
  constructor(private http: HttpClient) { }
  
  // Método para obtener los entrenamientos para clientes (solo lectura)
  getEntrenamientosCliente(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token') // Obtener el token JWT almacenado en localStorage
    });
    
    return this.http.get<any[]>(`${this.apiUrl}/entrenamientos`, { headers }).pipe(
      tap(data => console.log('Datos de entrenamientos recibidos:', data)),
      catchError((error: any) => {
        console.error('Error al obtener entrenamientos:', error);
        throw error;
      })
    );
  }
  
  // Método para obtener los entrenamientos editables para profesionales (lectura y escritura)
  getEntrenamientosProfesional(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token') // Obtener el token JWT almacenado en localStorage
    });
    
    return this.http.get<any[]>(`${this.apiUrl}/entrenamientos/editables`, { headers });
  }
}
