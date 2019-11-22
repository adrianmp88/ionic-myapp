import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntocontrolPage } from './puntocontrol.page';

const routes: Routes = [
  {
    path: '',
    component: PuntocontrolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuntocontrolPageRoutingModule {}
