import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';

import { GestionMembresiaPageRoutingModule } from './gestion-membresia-routing.module';
import { GestionMembresiaPage } from './gestion-membresia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionMembresiaPageRoutingModule
  ],
  declarations: [GestionMembresiaPage],
  providers: [AlertController]
})
export class GestionMembresiaPageModule {}
