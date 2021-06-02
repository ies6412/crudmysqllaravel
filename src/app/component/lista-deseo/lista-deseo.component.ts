import { Crudmysql } from './../../interface/crudmysql';
import { ListadeseoService } from 'src/app/servicio/listadeseo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-deseo',
  templateUrl: './lista-deseo.component.html',
  styleUrls: ['./lista-deseo.component.scss'],
})
export class ListaDeseoComponent implements OnInit {
  listaproducto:Crudmysql[]=[]
  

  constructor(private listadodeseo:ListadeseoService) { }

  ngOnInit() {
   this.listadeseo();
  }

   listadeseo(){

    this.listadodeseo.listardeseos().then(deseoprodu=>{
      console.log(deseoprodu)
        this.listaproducto=deseoprodu
    })


    
  }

}
