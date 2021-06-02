import { Observable } from 'rxjs';
import { Crudmysql } from './../interface/crudmysql';
import { ToastController } from '@ionic/angular';
import { Injectable, Output,EventEmitter } from '@angular/core';
import { Storage}   from '@ionic/storage-angular'



@Injectable({
  providedIn: 'root'
})
export class ListadeseoService {

  @Output() disparador:EventEmitter<number>=new EventEmitter();

  productosdeseo: Crudmysql[]=[];
  cantidad : number=0;
  mensaje:string='';
  constructor(private toast:ToastController,
              private storage:Storage,           
              ) {

       this.init();  

               }
  guardarproducto(producto:Crudmysql){
    
    const existe = this.productosdeseo.find(prod => prod.id === producto.id);
    if (!existe){
    //this.productosdeseo.push(producto);
    this.productosdeseo.unshift(producto);
    this.storage.set('productosdeseos',this.productosdeseo);
    this.mensaje="El Producto ha sido añadido a lista de deseos";
    this.tostmensaje(this.mensaje);
    
    }
    else
    {
    this.mensaje="El Producto  se encuentra en lista";
    this.tostmensaje(this.mensaje);
    }
    
    return this.productosdeseo.length
    
  }


  async listardeseos(){
      const listdesepro= await this.storage.get('productosdeseos');

     if(listdesepro){
      this.productosdeseo =listdesepro;
      
      }
      return listdesepro;
       // this.storage.get('productosdeseos'); 
  }



  listadoproductosdeseso(){

      if(this.productosdeseo.length)
      return this.productosdeseo.length
      else
      return
       
    }

   

 async  init(){
 const storage=await  this.storage.create();

  }
  

    async tostmensaje(mensajetoast:string){
      const toast=await this.toast.create({
        message:mensajetoast,
        duration: 2000
      });
       toast.present()
  
    }


  


}
