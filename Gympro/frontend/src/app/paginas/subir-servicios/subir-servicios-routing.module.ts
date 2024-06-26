import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubirServiciosPage } from './subir-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: SubirServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubirServiciosPageRoutingModule {}
