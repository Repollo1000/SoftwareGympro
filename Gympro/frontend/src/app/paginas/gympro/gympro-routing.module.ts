import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymproPage } from './gympro.page';

const routes: Routes = [
  {
    path: '',
    component: GymproPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymproPageRoutingModule {}
