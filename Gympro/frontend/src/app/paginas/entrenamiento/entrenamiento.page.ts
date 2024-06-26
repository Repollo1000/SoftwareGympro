import { Component, OnInit } from '@angular/core';
import { EntrenamientosService } from '../../services/entrenamientos.service'; // Ajusta la ruta según sea necesario

@Component({
  selector: 'app-entrenamiento',
  templateUrl: './entrenamiento.page.html',
  styleUrls: ['./entrenamiento.page.scss'],
})
export class EntrenamientoPage implements OnInit {
  entrenamientos: any[] = [];

  constructor(private entrenamientosService: EntrenamientosService) {}

  ngOnInit() {
    this.obtenerEntrenamientos();
  }

  obtenerEntrenamientos() {
    this.entrenamientosService.getEntrenamientos().subscribe(
      (data: any[]) => {
        if (data && Array.isArray(data)) {
          this.entrenamientos = data;
        } else {
          console.error('Los datos recibidos no están en el formato de array esperado:', data);
        }
      },
      (error: any) => {
        console.error('Error al obtener entrenamientos:', error);
      }
    );
  }
}
