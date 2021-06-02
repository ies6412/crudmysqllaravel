import { FormBuilder, FormControl } from '@angular/forms';

import { Crudmysql } from './../interface/crudmysql';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class CrudmysqlService {
  
   url='http://127.0.0.1:8000/api/';
  constructor(private httpmysql:HttpClient,
              private frm:FormBuilder) { }

  
  cargardatos(){
     
      //funciona bien con el error  y con el metododo hadleError
      // importamos el catherror y throw importamos junto con el observable
      // y creamos la funcion handleError.
       

      ///////------------------------------------// 
      /*  return this.httpmysql.get<Crudmysql[]>('http://127.0.0.1:8000/api/productos').pipe(
      //   catchError(this.handleError));*/
      //-----------------------------------------------------//
       
     // ahora vamos a probar con los interceptores...
     //creamos un modulo llamado interceptor
       // console.log('esto->',this.httpmysql.get<Crudmysql[]>('http://127.0.0.1:8000/api/productos'))
    
    
       return this.httpmysql.get<Crudmysql[]>(this.url+'productos');

           
  }
  //   con interceptores no hace falta esta funcion
  // private handleError(error:HttpErrorResponse) {
        
  //   return throwError(error.message || "Error de servidor");
  // }

  /** Log a HeroService message with the MessageService 
  private log(message: string) {
    this.messageService.add(`datos: ${message}`);
  }*/

  guardardatos(product:Crudmysql):Observable<Crudmysql[]>{

    console.log('nuevos->',product)
    //funciona bien con el error  y con el metododo hadleError
      // importamos el catherror y throw importamos junto con el observable
      // y creamos la funcion handleError.

    //--------------------------------------------------------------------------//
     /*return this.httpmysql.post<Crudmysql[]>('http://127.0.0.1:8000/api/productos',product).pipe(
      catchError(this.handleError)
    );*/
    //-----------------------------------------//

    //ahora vamos a crear el interceptor...
    return this.httpmysql.post<Crudmysql[]>('http://127.0.0.1:8000/api/productos',product);
  }
      
  
  
  
      edicioneliminar(prodid:number)
       {
        
        var datos = new FormData();
          datos.append("activado","0")
          datos.append("method","PUT");
           console.log('funcion-->',prodid);
           return this.httpmysql.delete(this.url+'productosc/'+prodid);
         }

     actualizardatos(product:Crudmysql,id:number):Observable<Crudmysql[]>{

     var datosfrm = new FormData();
    datosfrm.append("nombre", product.nombre);
    datosfrm.append("descripcion", product.descripcion);
    datosfrm.append("precio",product.precio.toString());
    datosfrm.append("categoria",product.categoria);
    datosfrm.append("imagenurl",product.imagenurl);
    datosfrm.append("method","PUT");
    // datosfrm.append("token","csrf_token()");

   

    
        
      console.log("forma",product,"dsad",id);
      return this.httpmysql.put<Crudmysql[]>(this.url+'productosc/'+id,product);

      
     }
  

}
