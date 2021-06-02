import { DetalleProductoComponent } from './../componente/detalle-producto/detalle-producto.component';
import { Crudmysql } from './../../interface/crudmysql';
import { CrudmysqlService } from 'src/app/servicio/crudmysql.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {AlertController, ModalController,IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.scss'],
})
export class ListaProductoComponent implements OnInit {
   
  @Input() Productos:Crudmysql[]=[];
  @Output() ProducSalida$=new EventEmitter<Crudmysql>();
  produ: Crudmysql[]=[];

  constructor( private modaldetalle:ModalController,
               public aler:AlertController,
               private servicio:CrudmysqlService,
               private ruta:Router,
               ){}
  ngOnInit(){}
  


  

  async eliminar(id:number,sliding:IonItemSliding){
    console.log('producto a eloiminar-->',id);
    const alert = await this.aler.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '¿Está seguro que desea <strong>Eliminar</strong> el registro?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            sliding.close()
          }
        }, {
          text: 'Okay',
          cssClass: 'specialClass',
          handler: () => {
            console.log('Producto funcsion eleiminar->',id)
            this.funcioneliminar(id,sliding);
          }
        }
      ]
    });

    await alert.present();
  }

   funcioneliminar(elipro:number,sliding:IonItemSliding){
    
    
    console.log('pasamos a eliminar');
        this.servicio.edicioneliminar(elipro).subscribe(producto => {
         console.log('respuesta',producto );
          //load.dismiss();
        },
             (error)=>{
              //load.dismiss()
                console.log("error-->",error);
              //this.errores=error;
              //this.presentartoast(this.errores);
                  }
          
    )
    sliding.close()
  
  }
    
          
   
  async abrirdetalle(products:Crudmysql,sliding:IonItemSliding ){

   
    console.log('producto-->',products);
    const detalleproducto=await this.modaldetalle.create({
      componentProps:{products},
      component:DetalleProductoComponent,
      
    });  
    
    detalleproducto.present();
    sliding.close();


    // this.ProducSalida$.emit(products);
    // console.log(this.ProducSalida$.emit(products));
    // this.ruta.navigate(['/detalle'])

    
  }

  

}
