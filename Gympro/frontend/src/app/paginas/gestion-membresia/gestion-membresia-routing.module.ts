import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionMembresiaPage } from './gestion-membresia.page';

const routes: Routes = [
  {
    path: '',
    component: GestionMembresiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionMembresiaPageRoutingModule {}
