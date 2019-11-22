import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntocontrolPageRoutingModule } from './puntocontrol-routing.module';

import { PuntocontrolPage } from './puntocontrol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntocontrolPageRoutingModule
  ],
  declarations: [PuntocontrolPage]
})
export class PuntocontrolPageModule {}
