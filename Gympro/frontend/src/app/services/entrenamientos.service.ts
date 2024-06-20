import { Injectable } from '@angular/core';
// Importa el decorador Injectable de Angular, que permite que esta clase se pueda inyectar como un servicio en otros componentes o servicios.

import { HttpClient, HttpHeaders } from '@angular/common/http';
// Importa HttpClient para hacer solicitudes HTTP y HttpHeaders para manipular los encabezados HTTP.

import { Observable, throwError } from 'rxjs';
// Importa Observable para manejar operaciones asíncronas y throwError para manejar y lanzar errores.

import { catchError, tap } from 'rxjs/operators';
// Importa operadores de RxJS: catchError para capturar y manejar errores en el flujo de datos, y tap para realizar efectos secundarios como logging.

@Injectable({
  providedIn: 'root'
})
// El decorador @Injectable marca esta clase como un servicio que puede ser inyectado. 
// providedIn: 'root' hace que el servicio esté disponible en toda la aplicación (nivel de raíz).

export class EntrenamientosService {
  private apiUrl = 'http://localhost:3000/api'; // URL correcta del backend
  // Define la URL base del backend para las solicitudes relacionadas con entrenamientos.

  constructor(private http: HttpClient) { }
  // Inyecta HttpClient en el constructor para poder hacer solicitudes HTTP desde este servicio.

  // Método para obtener los entrenamientos
  getEntrenamientos(): Observable<any[]> {
    const token = localStorage.getItem('token');
    // Obtiene el token de autenticación almacenado en el localStorage del navegador.

    if (!token) {
      throw new Error('No se ha encontrado token de autenticación en el localStorage.');
      // Lanza un error si no se encuentra el token en el localStorage.
    }

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
      // Crea un encabezado HTTP con el token de autenticación.
    });

    return this.http.get<any[]>(`${this.apiUrl}/entrenamientos`, { headers }).pipe(
      // Hace una solicitud GET a la URL de entrenamientos en el backend, 
      // incluyendo los encabezados de autenticación, y retorna un Observable.

      tap(data => console.log('Datos de entrenamientos recibidos:', data)),
      // Usa el operador tap para hacer logging de los datos recibidos de la solicitud HTTP.

      catchError(this.handleError)
      // Usa el operador catchError para capturar y manejar cualquier error que ocurra durante la solicitud HTTP.
    );
  }

  // Manejo de errores centralizado
  private handleError(error: any) {
    console.error('Error en la solicitud:', error);
    // Hace logging del error en la consola.

    return throwError(error);
    // Retorna un Observable que lanza el error para que el componente que llama el servicio pueda manejarlo.
  }
}
