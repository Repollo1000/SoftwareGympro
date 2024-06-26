import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubirServiciosPageRoutingModule } from './subir-servicios-routing.module';

import { SubirServiciosPage } from './subir-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubirServiciosPageRoutingModule
  ],
  declarations: [SubirServiciosPage]
})
export class SubirServiciosPageModule {}
