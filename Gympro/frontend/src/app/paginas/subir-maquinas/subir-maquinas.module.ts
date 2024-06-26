import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SubirMaquinasPageRoutingModule } from './subir-maquinas-routing.module';
import { SubirMaquinasPage } from './subir-maquinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Asegúrate de importar ReactiveFormsModule para trabajar con formularios reactivos
    IonicModule,
    SubirMaquinasPageRoutingModule
  ],
  declarations: [SubirMaquinasPage]
})
export class SubirMaquinasPageModule {}
