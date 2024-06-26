import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClasesService } from '../../services/clases.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-clase',
  templateUrl: './create-clase.page.html',
  styleUrls: ['./create-clase.page.scss'],
})
export class CreateClasePage {

  claseForm: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    private claseService: ClasesService,
    private router: Router
    
  ) {
    this.claseForm = this.formBuilder.group({
      tipo: ['', Validators.required],
      descripcion: [''],
      fechaHora: ['', Validators.required] // Utilizamos un solo campo para fecha y hora
    });
  }

  onSubmit() {
    if (this.claseForm.valid) {
      // Obtener el valor de fechaHora
      const fechaHoraSeleccionada: string = this.claseForm.value.fechaHora;

      // Dividir la fecha y la hora
      const fechaSeleccionada: string = fechaHoraSeleccionada.slice(0, 10); // YYYY-MM-DD
      const horaSeleccionada: string = fechaHoraSeleccionada.slice(11, 16); // HH:mm

      // Crear objeto para enviar al servicio
      const claseData = {
        tipo: this.claseForm.value.tipo,
        descripcion: this.claseForm.value.descripcion,
        fecha: fechaSeleccionada,
        hora: horaSeleccionada
      };

      // Llamar al servicio para crear la clase
      this.claseService.crearClase(claseData).subscribe((response: any) => {
        console.log('Clase creada exitosamente', response);
        // Puedes redirigir a otra página o hacer otras acciones luego de crear la clase
        this.router.navigate(['/clases']);
      }, (error: any) => {
        console.error('Error al crear la clase', error);
      });
    }
  }
}
