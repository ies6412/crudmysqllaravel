import { ToastController } from '@ionic/angular';
import { CrudmysqlService } from './../../servicio/crudmysql.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Crudmysql } from 'src/app/interface/crudmysql';
import { Component, Input, OnInit } from '@angular/core';
import {take} from 'rxjs/operators';



@Component({
  selector: 'app-actualizarc',
  templateUrl: './actualizarc.component.html',
  styleUrls: ['./actualizarc.component.scss'],
})
export class ActualizarcComponent implements OnInit  {
  @Input() productos:Crudmysql;

  formas:FormGroup;
  mensaje:string=''
  
    constructor( private servicio:CrudmysqlService,
                 private toast:ToastController) { }

  ngOnInit() {
    
   // this.valoresfrm()
    this.validar();
       
  }
   valoresfrm(){

    
    this.formas.setValue({
      nombre: this.productos.nombre,
      precio: this.productos.precio,
      imagenurl:this.productos.imagenurl,
      categoria:this.productos.categoria,
      descripcion:this.productos.descripcion
    })
    this.formas.updateValueAndValidity();
   }
   validar(){
    this.formas=new FormGroup({
      nombre: new FormControl(null,[Validators.required]),
      precio:new FormControl(null,[Validators.required]),
      imagenurl:new FormControl(null,[Validators.required]),
      categoria:new FormControl(null,[Validators.required]),
      descripcion:new FormControl(null,[Validators.required])

      

     })
   }

  async submitform(id:number){
    
    console.log('valor de forma->',this.formas.value,'id',id);
    this.servicio.actualizardatos(this.formas.value,id)
    .pipe(take(1)).subscribe(($respuesta)=>{
      this.formas.reset();
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
