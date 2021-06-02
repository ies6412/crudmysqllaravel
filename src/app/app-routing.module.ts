import { ListaProductoComponent } from './component/lista-producto/lista-producto.component';
import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },*/
  /*{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },*/
  {
    path: 'productos',
    loadChildren: () => import('./page/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path:'',
    redirectTo:'productos',
    pathMatch:'full'
  },
    {
    path: 'nuevoproducto',
    loadChildren: () => import('./page/nuevoproducto/nuevoproducto.module').then( m => m.NuevoproductoPageModule)
  },
 
  {
    path: 'detalle',
    loadChildren: () => import('./page/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path:'component',
    loadChildren:()=>import('./component/component.module').then(m=>m.ComponentModule)
  },
  {
    path: 'actualizar',
    loadChildren: () => import('./page/actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  },
  
  {
    path: 'pruebas',
    loadChildren: () => import('./page/pruebas/pruebas.module').then( m => m.PruebasPageModule)
  },
  // {
  //   path: 'actualizarcompo',
  //   loadChildren: () => import('./page/actualizarcompo/actualizarcompo.module').then( m => m.ActualizarcompoPageModule)
  // },
  
  
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
