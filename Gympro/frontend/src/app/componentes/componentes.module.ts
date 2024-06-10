import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { FooterComponent } from '../componentes/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    IonicModule ,// Asegúrate de que IonicModule está importado aquí
    RouterModule
  ],
  exports: [FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Añadir el esquema aquí
})
export class SharedModule { }
