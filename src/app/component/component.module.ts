import { NuevoproductoComponent } from './cabceras/nuevoproducto/nuevoproducto.component'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ComponetRoutingModule } from './componet-routing.module';
import { DetalleProductoComponent } from './componente/detalle-producto/detalle-producto.component';
import { ActualizarcComponent } from './actualizarc/actualizarc.component';
import { PipeModule } from './../pipe/pipe.module';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {ListaProductoComponent} from '../component/lista-producto/lista-producto.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabcerasComponent } from './cabceras/cabceras.component';
import { ListaDeseoComponent } from './lista-deseo/lista-deseo.component';



@NgModule({
  declarations: [
                 DetalleProductoComponent,
                 ListaProductoComponent,
                 ActualizarcComponent,
                 CabcerasComponent,
                 NuevoproductoComponent,
                 ListaDeseoComponent,
                               
                                
                ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule,
    ComponetRoutingModule
    
    
  ],
  exports:[
     DetalleProductoComponent,
     ListaProductoComponent,
     CabcerasComponent,
     NuevoproductoComponent,
     ListaDeseoComponent,
     ActualizarcComponent
  ],
 
})
export class ComponentModule { }
