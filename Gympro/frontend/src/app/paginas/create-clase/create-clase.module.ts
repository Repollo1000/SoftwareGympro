import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateClasePageRoutingModule } from './create-clase-routing.module';

import { CreateClasePage } from './create-clase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateClasePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateClasePage]
})
export class CreateClasePageModule {}
