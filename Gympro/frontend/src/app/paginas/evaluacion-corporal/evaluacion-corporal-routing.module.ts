import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvaluacionCorporalPage } from './evaluacion-corporal.page';

const routes: Routes = [
  {
    path: '',
    component: EvaluacionCorporalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluacionCorporalPageRoutingModule {}
