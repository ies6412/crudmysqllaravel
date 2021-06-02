// import { ListadeseoService } from 'src/app/servicio/listadeseo.service';

import { ActualizarcComponent } from './../../actualizarc/actualizarc.component';
import { DataservicioService } from './../../../servicio/dataservicio.service';
import { Router, Routes } from '@angular/router';
import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Crudmysql } from './../../../interface/crudmysql';
import { ListadeseoService } from './../../../servicio/listadeseo.service'





@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss'],
})
export class DetalleProductoComponent implements OnInit {
  @Input() products:Crudmysql; //viene del control modal
  
                    
  
  
  constructor(private modalctl:ModalController,private router:Router,
              public data:DataservicioService,
              private lista:ListadeseoService
              
               ) { }

  ngOnInit() {
    // console.log('->',this.products);
      }
  cerrarmodal(){
    this.modalctl.dismiss()
     
     
  }
  async actualizar(productos:Crudmysql[]){
     
    this.modalctl.dismiss();
    const modalactualizar= await this.modalctl.create({

        componentProps:{productos},
        component: ActualizarcComponent
    })
    
      modalactualizar.present();

    // console.log('event-->')
    //  this.data.datos$.emit(products)
    //  //this.productoscambio.emit(products);
    //  this.router.navigate(['/actualizar'])
       }
    
   async deseoproducto()  {

    //  await this.lista.guardarproducto(this.products)

     const numero= await this.lista.guardarproducto(this.products)

    //  this.lista.disparador.emit({data:....}) en data podemos poner del tipo crudmysql
    //  y en el servicio  ponemos el eventemiter como 
    // disparador:EventEmitter<crudmysql¿ >=new EventEmitter();'

     this.lista.disparador.emit(numero);
      
    

      

       } 
  
}
