import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateClasePage } from './create-clase.page';

const routes: Routes = [
  {
    path: '',
    component: CreateClasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateClasePageRoutingModule {}
