import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Camara1PageRoutingModule } from './camara1-routing.module';

import { Camara1Page } from './camara1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Camara1PageRoutingModule
  ],
  declarations: [Camara1Page]
})
export class Camara1PageModule {}
