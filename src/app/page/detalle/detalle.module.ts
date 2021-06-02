import { ListaProductoComponent } from './../../component/lista-producto/lista-producto.component';
import { ComponentModule } from './../../component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePageRoutingModule } from './detalle-routing.module';

import { DetallePage } from './detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePageRoutingModule,
    ComponentModule,
    
  ],
  declarations: [DetallePage]
})
export class DetallePageModule {}
