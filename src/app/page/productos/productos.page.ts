import { ListadeseoService } from 'src/app/servicio/listadeseo.service';
import { DetalleProductoComponent } from './../../component/componente/detalle-producto/detalle-producto.component';
import { CrudmysqlService } from './../../servicio/crudmysql.service';
import { Crudmysql } from './../../interface/crudmysql';
import { ToastController, ModalController, LoadingController } from '@ionic/angular';
import { ListaProductoComponent } from './../../component/lista-producto/lista-producto.component';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  // 
  

  Productos:Crudmysql[]=[];
  errores: string;
 
  
  constructor(private servicio:CrudmysqlService,
    private Loading:LoadingController,
    private modaldetalle:ModalController,
    private toast:ToastController,
    private lista:ListadeseoService
    
    ) { }

  async ngOnInit() {
      
       //cantidad de productgos en lista de deseos

    const load= await this.Loading.create({message:'cargando'});
    load.present();

     this.cargarlistaproducto();
     load.dismiss()
    
     //funciona bien con el metodo error y throw de servicios...
     
    // this.servicio.cargardatos().subscribe(producto => {
    //   console.log('respuesta',producto );
    //   load.dismiss();
    //   this.Productos=producto;},
    //   (error)=>{
    //     load.dismiss()
    //     console.log("error",error);
    //     this.errores=error;
    //     this.presentartoast(this.errores);
    //     });

    //ahora vamos hacer con interceptores, se ha creado el servicio interceptor.service.ts

    
     

   }

   async presentartoast(errortoast:string){
    const toast=await this.toast.create({
      message: errortoast,
      duration: 2000
    });
     toast.present()

   }
  
   refrescar(event) {
    console.log('cargar',event)
     setTimeout(() => {
      this.cargarlistaproducto(event);
       event.target.complete();
     }, 2000);
   }

   
   cargarlistaproducto(event ?){
    this.servicio.cargardatos().subscribe(producto => {
      console.log('respuesta',producto );
      //load.dismiss();
      this.Productos=producto;}
      ,(error)=>{
        //load.dismiss()
            console.log("error-->",error);
            this.errores=error;
          this.presentartoast(this.errores);
            });


   }
  
   

  
}