import { Crudmysql } from './../../interface/crudmysql';
import { Subscription } from 'rxjs';
import { DataservicioService } from './../../servicio/dataservicio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  mensajetitulo:string ='pruebas'
  produstos:Subscription;
  producto: Crudmysql[]=[];

  constructor(private data:DataservicioService) { }

  ngOnInit() {

 


  }

  
}
