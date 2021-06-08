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
    redirectTo:'mapa2',
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
  {
    path: 'mapa',
    loadChildren: () => import('./page/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'mapa2',
    loadChildren: () => import('./page/mapa2/mapa2.module').then( m => m.Mapa2PageModule)
  },  {
    path: 'camara1',
    loadChildren: () => import('./page/camara1/camara1.module').then( m => m.Camara1PageModule)
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
