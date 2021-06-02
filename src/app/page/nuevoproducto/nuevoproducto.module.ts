import { ComponentModule } from './../../component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoproductoPageRoutingModule } from './nuevoproducto-routing.module';

import { NuevoproductoPage } from './nuevoproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NuevoproductoPageRoutingModule,
    ComponentModule
  ],
  declarations: [NuevoproductoPage]
})
export class NuevoproductoPageModule {}
