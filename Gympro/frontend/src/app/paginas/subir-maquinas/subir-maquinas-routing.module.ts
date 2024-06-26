import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubirMaquinasPage } from './subir-maquinas.page';

const routes: Routes = [
  {
    path: '',
    component: SubirMaquinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubirMaquinasPageRoutingModule {}
