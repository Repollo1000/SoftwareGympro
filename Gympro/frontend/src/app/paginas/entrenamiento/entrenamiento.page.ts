// entrenamientos.page.ts
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
    // Llama al método correspondiente del servicio para obtener los entrenamientos
    this.entrenamientosService.getEntrenamientosCliente().subscribe(
      (data: any[]) => {
        this.entrenamientos = data; // Asigna los datos obtenidos a la variable local
      },
      (      error: any) => {
        console.error('Error al obtener los entrenamientos:', error);
      }
    );
  }

}






