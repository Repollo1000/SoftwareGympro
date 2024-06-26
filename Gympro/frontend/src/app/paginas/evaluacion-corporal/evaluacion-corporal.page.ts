import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CorporalService } from '../../services/corporal.service'; // Ajusta la ruta según sea necesario

@Component({
  selector: 'app-evaluacion-corporal',
  templateUrl: './evaluacion-corporal.page.html',
  styleUrls: ['./evaluacion-corporal.page.scss'],
})
export class EvaluacionCorporalPage implements OnInit {

  evaluacionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private CorporalService: CorporalService // Ajusta el servicio según sea necesario
  ) {
    this.evaluacionForm = this.formBuilder.group({
      fechaHora: ['', Validators.required], // Un solo campo para fecha y hora
      imc: ['', Validators.required],
      observaciones: ['', Validators.maxLength(50)],
      created_at: [''] // No es necesario capturar esto en el formulario
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.evaluacionForm.valid) {
      // Obtener valores del formulario
      const fechaHora = this.evaluacionForm.value.fechaHora;
      const imc = this.evaluacionForm.value.imc;
      const observaciones = this.evaluacionForm.value.observaciones;

      // Separar la fecha y la hora
      const fechaSeleccionada: string = fechaHora.slice(0, 10); // YYYY-MM-DD
      const horaSeleccionada: string = fechaHora.slice(11, 16); // HH:mm
      imc: parseFloat(imc)

      // Obtener la fecha y hora actual para created_at (en este ejemplo)
      const createdAt = new Date().toISOString(); // Aquí se puede ajustar según el formato necesario

      // Construir objeto para enviar al servicio
      const evaluacionData = {
        fecha: fechaSeleccionada,
        hora: horaSeleccionada,
        imc,
        observaciones,
        created_at: createdAt
      };

      // Llamar al servicio para guardar la evaluación corporal
      this.CorporalService.guardarEvaluacion(evaluacionData).subscribe((response: any) => {
        console.log('Evaluación guardada exitosamente', response);
        // Aquí puedes manejar la redirección o mostrar un mensaje de éxito
      }, (error: any) => {
        console.error('Error al guardar la evaluación', error);
        // Aquí puedes manejar el error y mostrar un mensaje al usuario
      });
    }
  }

}
