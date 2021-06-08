import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Camara1Page } from './camara1.page';

const routes: Routes = [
  {
    path: '',
    component: Camara1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Camara1PageRoutingModule {}
