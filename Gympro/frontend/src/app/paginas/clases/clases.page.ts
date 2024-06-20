import { Component, OnInit } from '@angular/core';
import { ClasesService } from '../../services/clases.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {

  clases: any[] = [];

  constructor(private clasesService: ClasesService) { }

  ngOnInit() {
    this.getClases();
  }

  getClases() {
    this.clasesService.getClases().subscribe(
      (data: any[]) => {
        console.log('Clases recibidas:', data);
        this.clases = data;
      },
      (error: any) => {
        console.error('Error al obtener las clases:', error);
      }
    );
  }
}
