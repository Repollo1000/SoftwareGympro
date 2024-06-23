import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClasesService } from '../../services/clases.service';

@Component({
  selector: 'app-create-clase',
  templateUrl: './create-clase.page.html',
  styleUrls: ['./create-clase.page.scss'],
})
export class CreateClasePage {

  claseForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private claseService: ClasesService
  ) {
    this.claseForm = this.formBuilder.group({
      tipo: [''],
      descripcion: [''],
      fecha: [''],
      hora: ['']
    });
  }

  onSubmit() {
    if (this.claseForm.valid) {
      this.claseService.crearClase(this.claseForm.value).subscribe((response: any) => {
        console.log('Clase creada exitosamente', response);
        // Puedes redirigir a otra página o hacer otras acciones luego de crear la clase
      }, (error: any) => {
        console.error('Error al crear la clase', error);
      });
    }
  }
}
