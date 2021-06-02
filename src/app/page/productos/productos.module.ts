import { ComponentModule } from './../../component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductosPageRoutingModule } from './productos-routing.module';

import { ProductosPage } from './productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosPageRoutingModule,
    ComponentModule
     ],
    
  declarations: [ProductosPage]
})
export class ProductosPageModule {}
