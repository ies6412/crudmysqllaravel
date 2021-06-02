import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { DetalleProductoComponent } from './componente/detalle-producto/detalle-producto.component';
import { ActualizarcComponent } from './actualizarc/actualizarc.component';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [

     { 
       path:'',
       children:[
                 { path:'actualizarc',component: ActualizarcComponent },
                 { path:'detalleproducto',component: DetalleProductoComponent },
                 { path:'listaproducto',component:ListaProductoComponent },
                //  { path:'**',redirectTo:'component/actualizarc',pathMatch:'full'}
                 
                 
       ]
     }
     
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ComponetRoutingModule { }
