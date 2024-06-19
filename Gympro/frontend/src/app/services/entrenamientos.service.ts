// entrenamientos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrenamientosService {

  private apiUrl = 'http://localhost:3000/auth'; // Reemplaza con la URL de tu API backend

  constructor(private http: HttpClient) { }

  // Método para obtener los entrenamientos para clientes (solo lectura)
  getEntrenamientosCliente(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/entrenamientos`);
  }

  // Método para obtener los entrenamientos editables para profesionales (lectura y escritura)
  getEntrenamientosProfesional(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/entrenamientos/editables`);
  }
}
