import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrenamientoPageRoutingModule } from './entrenamiento-routing.module';
import { EntrenamientoPage } from './entrenamiento.page';
import { EntrenamientosService } from '../../services/entrenamientos.service'; // Ajusta la ruta según sea necesario

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EntrenamientoPageRoutingModule
  ],
  declarations: [EntrenamientoPage],
  providers: [EntrenamientosService] // Añade el servicio al array de providers si es necesario
})
export class EntrenamientoPageModule {}
