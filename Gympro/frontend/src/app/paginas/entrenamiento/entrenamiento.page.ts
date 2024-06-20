// entrenamiento.page.ts
import { Component, OnInit } from '@angular/core';
import { EntrenamientosService } from '../../services/entrenamientos.service';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamiento.page.html',
  styleUrls: ['./entrenamiento.page.scss'],
})
export class EntrenamientoPage implements OnInit {

  entrenamientos: any[] = []; // Variable para almacenar los entrenamientos

  constructor(private entrenamientosService: EntrenamientosService) { }

  ngOnInit() {
    this.obtenerEntrenamientos(); // Llama al método para obtener los entrenamientos al inicializar el componente
  }

  obtenerEntrenamientos() {
    this.entrenamientosService.getEntrenamientosCliente().subscribe(
      (data: any[]) => {
        console.log('Entrenamientos recibidos:', data);
        // Aquí puedes transformar los datos si es necesario
        this.entrenamientos = data.map(entrenamiento => ({
          tipo: entrenamiento.tipo,
          descripcion: entrenamiento.descripcion
        }));
      },
      (error: any) => {
        console.error('Error al obtener los entrenamientos:', error);
      }
    );
  }

  imprimirEntrenamientos() {
    console.log('Entrenamientos actuales:', this.entrenamientos);
  }

}
