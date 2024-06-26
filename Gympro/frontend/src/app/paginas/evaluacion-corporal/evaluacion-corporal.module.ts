import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluacionCorporalPageRoutingModule } from './evaluacion-corporal-routing.module';

import { EvaluacionCorporalPage } from './evaluacion-corporal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvaluacionCorporalPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [EvaluacionCorporalPage]
})
export class EvaluacionCorporalPageModule {}
