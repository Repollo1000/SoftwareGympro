import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguimientoPageRoutingModule } from './seguimiento-routing.module';
import { SharedModule } from '../../componentes/componentes.module'; 
import { SeguimientoPage } from './seguimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguimientoPageRoutingModule,
    SharedModule
  ],
  declarations: [SeguimientoPage]
})
export class SeguimientoPageModule {}
