import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';


declare var google:any
@Injectable({
  providedIn: 'root'
})
export class GooglemapsService {
apikey=environment.ApykeyGoogle
maploades=false;

  constructor() { }


  init(documet:any, renderer:any):Promise<any>{

    return new Promise((resolve)=>
    {
      if(this.maploades){
        console.log('cargando mapa');
        resolve(true)
        return
      }
      const script= renderer.createElement('script')
      script.id='google-maps';
      window['mapInit']=()=>{
        this.maploades=true;
        if(google)
        {
          console.log('cargando')
          }
         else{
           console.log('no definido')
             }
              resolve(true);
              return;
     }
     if(this.apikey)
     {
      
       script.src="https://maps.googleapis.com/maps/api/js?key="+this.apikey+'&callback=mapInit';
       console.log(script)
     }
     else
     {script.src="https://maps.googleapis.com/maps/api/js?&callback=mapInit";
    }
       renderer.appendChild(document.body,script)
       
       



    })

  }
}
