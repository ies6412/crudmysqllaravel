import { Camaracap } from './../../interface/camaracap';
import {CamaracapacitorService } from './../../servicio/camaracapacitor.service'
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-camara1',
  templateUrl: './camara1.page.html',
  styleUrls: ['./camara1.page.scss'],
})
export class Camara1Page implements OnInit {
   photo:Camaracap[]=[]
  constructor( public sercam:CamaracapacitorService) { }

  async ngOnInit() {
    await this.sercam.loadSave();
  }
tomarfotos(){

 this.sercam.addphoto()
}


}
