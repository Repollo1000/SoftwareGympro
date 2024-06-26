import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaquinasService } from '../../services/maquinas.service'; // Ajusta la ruta según sea necesario

@Component({
  selector: 'app-subir-maquinas',
  templateUrl: './subir-maquinas.page.html',
  styleUrls: ['./subir-maquinas.page.scss'],
})
export class SubirMaquinasPage implements OnInit {

  maquinasForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private maquinasService: MaquinasService // Ajusta el servicio según sea necesario
  ) {
    this.maquinasForm = this.formBuilder.group({
      sala: ['', Validators.maxLength(50)],
      fechaHora: ['', Validators.required], // Un solo campo para fecha y hora
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.maquinasForm.valid) {
      // Obtener valores del formulario
      const sala = this.maquinasForm.value.sala;
      const fechaHora = this.maquinasForm.value.fechaHora;
      const descripcion = this.maquinasForm.value.descripcion;

      // Separar la fecha y la hora
      const fechaSeleccionada: string = fechaHora.slice(0, 10); // YYYY-MM-DD
      const horaSeleccionada: string = fechaHora.slice(11, 16); // HH:mm

      // Construir objeto para enviar al servicio
      const maquinaData = {
        sala,
        fecha: fechaSeleccionada,
        hora: horaSeleccionada,
        descripcion
      };

      // Llamar al servicio para guardar la máquina
      this.maquinasService.guardarMaquinas(maquinaData).subscribe((response: any) => {
        console.log('Máquina guardada exitosamente', response);
        // Aquí puedes manejar la redirección o mostrar un mensaje de éxito
      }, (error: any) => {
        console.error('Error al guardar la máquina', error);
        // Aquí puedes manejar el error y mostrar un mensaje al usuario
      });
    }
  }

}
