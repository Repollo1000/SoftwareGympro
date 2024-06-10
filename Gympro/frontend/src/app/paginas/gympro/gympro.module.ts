import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymproPageRoutingModule } from './gympro-routing.module';

import { GymproPage } from './gympro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymproPageRoutingModule
  ],
  declarations: [GymproPage]
})
export class GymproPageModule {}
