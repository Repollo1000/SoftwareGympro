import { Component, OnInit } from '@angular/core';
import { MaquinasService } from '../../services/maquinas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-maquinas',
  templateUrl: './maquinas.page.html',
  styleUrls: ['./maquinas.page.scss'],
})
export class MaquinasPage implements OnInit {
  maquinas: any[] = [];
  http: any;
  apiUrl: any;

  constructor(private maquinasService: MaquinasService) {}

  ngOnInit() {
    this.obtenerMaquinas();
  }

  obtenerMaquinas() {
    this.maquinasService.getMaquinas().subscribe(
      (data: any[]) => {
        if (data && Array.isArray(data)) {
          this.maquinas = data;
        } else {
          console.error('Los datos recibidos no están en el formato de array esperado:', data);
        }
      },
      (error: any) => {
        console.error('Error al obtener maquinas:', error);
      }
    );
  }
  
}
