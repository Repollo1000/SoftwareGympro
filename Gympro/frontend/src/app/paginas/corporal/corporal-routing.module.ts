import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorporalPage } from './corporal.page';

const routes: Routes = [
  {
    path: '',
    component: CorporalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorporalPageRoutingModule {}
