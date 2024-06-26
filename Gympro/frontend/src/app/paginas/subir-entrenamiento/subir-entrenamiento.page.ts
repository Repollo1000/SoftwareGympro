import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntrenamientosService } from '../../services/entrenamientos.service'; // Ajusta la ruta según sea necesario

@Component({
  selector: 'app-subir-entrenamiento',
  templateUrl: './subir-entrenamiento.page.html',
  styleUrls: ['./subir-entrenamiento.page.scss'],
})
export class SubirEntrenamientoPage implements OnInit {

  entrenamientoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private entrenamientosService: EntrenamientosService // Verifica el nombre del servicio
  ) {
    this.entrenamientoForm = this.formBuilder.group({
      tipo: ['', Validators.required],
      descripcion: ['', Validators.required],
      idUser: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.entrenamientoForm.valid) {
      // Obtener valores del formulario
      const tipo = this.entrenamientoForm.value.tipo;
      const descripcion = this.entrenamientoForm.value.descripcion;
      const idUser = this.entrenamientoForm.value.idUser;

      // Construir objeto para enviar al servicio
      const entrenamientoData = {
        tipo,
        descripcion,
        idUser
      };

      // Llamar al servicio para guardar el entrenamiento
      this.entrenamientosService.guardarEntrenamiento(entrenamientoData).subscribe(
        (response: any) => {
          console.log('Entrenamiento guardado exitosamente', response);
          // Aquí puedes manejar la redirección o mostrar un mensaje de éxito
        },
        (error: any) => {
          console.error('Error al guardar el entrenamiento', error);
          // Aquí puedes manejar el error y mostrar un mensaje al usuario
        }
      );
    }
  }
}
