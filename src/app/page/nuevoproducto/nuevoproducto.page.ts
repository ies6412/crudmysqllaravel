import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { CrudmysqlService } from 'src/app/servicio/crudmysql.service';
import { Crudmysql} from '../../interface/crudmysql';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
@Component({
  selector: 'app-nuevoproducto',
  templateUrl: './nuevoproducto.page.html',
  styleUrls: ['./nuevoproducto.page.scss'],
})
export class NuevoproductoPage implements OnInit {
   forma:FormGroup;
   datos: Crudmysql[]=[] ;
   mensaje:any;
    constructor(private servicio:CrudmysqlService,
                private loadcontrl:LoadingController,
                private toast:ToastController) {

                 }

    ngOnInit() {

     this.forma=new FormGroup({
       nombre: new FormControl(null,[Validators.required]),
       precio:new FormControl('',[Validators.required]),
       imagenurl:new FormControl(null,[Validators.required]),
       categoria:new FormControl(null,[Validators.required]),
       descripcion:new FormControl(null,[Validators.required])

      })
       
   }
  async submitform(){

    //esto es utilizando  error y en el servidio utuilziando throw si funciona 
       
    //   this.servicio.guardardatos(this.forma.value)
    //  .pipe(take(1))
    //  .subscribe(($respuesta)=>{
    //   this.forma.reset();
    //   this.mensaje="Se han guardado los datos";
    //   this.tostmensaje(this.mensaje);       
    //   },
    //     (error)=>{
    //       //console.log('error',error.message)
    //      this.mensaje="Ha ocurrido un error";
    //      this.tostmensaje(this.mensaje);
    //     });

    // ahora vamos a probar con los interceptores


    this.servicio.guardardatos(this.forma.value)
    .pipe(take(1))
      .subscribe(($respuesta)=>{
      this.forma.reset();
      this.mensaje="Se han guardado los datos";
     this.tostmensaje(this.mensaje);},
         (error)=>{
           //console.log('error',error.message)
           this.mensaje=error;
           this.tostmensaje(this.mensaje);
         });       
      

  }

  async tostmensaje(mensajetoast:any){
    const toast=await this.toast.create({
      message:mensajetoast,
      duration: 2000
    });
     toast.present()

  }
  
}
 

