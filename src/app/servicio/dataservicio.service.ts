import { Crudmysql } from 'src/app/interface/crudmysql';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataservicioService {

 public datos$=new EventEmitter<Crudmysql[]>();
//el signo $ es un convenio pra identificar que es un onbervable


  constructor() { 
    
  }
}
