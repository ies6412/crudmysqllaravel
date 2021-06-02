import { ListadeseoService } from './../../../servicio/listadeseo.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-nuevoproducto',
  templateUrl: './nuevoproducto.component.html',
  styleUrls: ['./nuevoproducto.component.scss'],
})
export class NuevoproductoComponent implements OnInit {
  // @Input() Cantidadproducto:any
  constructor(private lista:ListadeseoService) { }
    CantidadProductoDeseo:any;
  ngOnInit() {

    this.cantidadlista();
    

  }

  async cantidadlista(){
    
     this.lista.disparador.subscribe(data=>
      {
        console.log('cantiad de datos->',data, 'lista de deseos despues->',this.CantidadProductoDeseo)
        this.CantidadProductoDeseo=data;
       })
       
      
   }

}
