import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorporalPageRoutingModule } from './corporal-routing.module';

import { CorporalPage } from './corporal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorporalPageRoutingModule
  ],
  declarations: [CorporalPage]
})
export class CorporalPageModule {}
