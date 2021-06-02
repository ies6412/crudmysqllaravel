import { catchError } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
 
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
   
   //console.log('por aqui paso el interceptor')
    //return next.handle(req)
    
    
    return next.handle(req).pipe(
      
      catchError(error => {
        let errorMessage = '';
        if (error instanceof ErrorEvent) {
          console.log("error de cliente->",error)
          // client-side error
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          
            console.log("error->",error)
            //esto se obtiene de error

            // error-> 
            //  Object { headers: {…}, 
            //  status: 500, statusText: "Internal Server Error", 
            //  url: "http://127.0.0.1:8000/api/productos", ok: false,
            //  name: "HttpErrorResponse",
            //  message: "Http failure response for http://127.0.0.1:8000/api/productos: 500 Internal Server Error",
            //   error: {…} }

            //cojemos error.statusText y errro.status... eso pasamos para presentar.


          // backend error
          // console.log(error.status) error 500
          //console.log(error.message) error internal server
         // errorMessage = `Server-side error: ${error.status} ${error.message}`;

         
            errorMessage=`Server-side error: ${error.status} ${error.statusText}` ;
        }
        
        // aquí podrías agregar código que muestre el error en alguna parte fija de la pantalla.
        
        return throwError(errorMessage);
      })
    );
  }




  

}
