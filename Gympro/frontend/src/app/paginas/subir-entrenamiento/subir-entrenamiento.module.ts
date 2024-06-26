import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubirEntrenamientoPageRoutingModule } from './subir-entrenamiento-routing.module';

import { SubirEntrenamientoPage } from './subir-entrenamiento.page';
import { EntrenamientosService } from '../../services/entrenamientos.service'; // Verifica la ruta del servicio

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SubirEntrenamientoPageRoutingModule
  ],
  declarations: [SubirEntrenamientoPage],
  providers: [EntrenamientosService] // Añade el servicio a los providers del módulo
})
export class SubirEntrenamientoPageModule {}
