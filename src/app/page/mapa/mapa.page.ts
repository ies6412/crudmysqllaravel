import { Marker } from './../../interface/googlemaps'
import { GooglemapsService } from './../../servicio/googlemaps.service';
import { Component, OnInit, Renderer2, ViewChild, ElementRef, Inject, Injectable } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import {Plugins} from '@capacitor/core';

declare var google;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
   map=null
  
   markers: Marker[] = [
    {
      position: {
        lat: 4.658383846282959,
        lng: -74.09394073486328,
      },
      title: 'Parque Simón Bolivar'
    },
    {
      position: {
        lat: 4.667945861816406,
        lng: -74.09964752197266,
      },
      title: 'Jardín Botánico'
    },
    {
      position: {
        lat: 4.676802158355713,
        lng: -74.04825592041016,
      },
      title: 'Parque la 93'
    },
    {
      position: {
        lat: 4.6554284,
        lng: -74.1094989,
      },
      title: 'Maloka'
    },
  ];


  constructor(private googleservice:GooglemapsService,
    @Inject (DOCUMENT) private document,
    private renderer:Renderer2,) { }

  ngOnInit() {

    this.init();

    
  }

  async init(){
    console.log('al servicio')
    this.googleservice.init(this.document,this.renderer).then(()=>{
       console.log('aqui')
       this.loadMap();
  }).catch((err)=>{console.log(err)})
}


  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('mapa');
    // create LatLng object
    // const myLatLng = {
    //   lat: 4.6554284,
    //     lng: -74.1094989,};

    const myLatLng=this.markers[0].position
    
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
       this.renderMarkers();
      mapEle.classList.add('show-map');
    //   const market={
    //     position: {
    //       lat:  -1.462190, 
    //       lng: -77.993791,
    //   },
    //   title: 'uno'
    // }
    // this.addMarker()
         
    });
  }


  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }


  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }
}
