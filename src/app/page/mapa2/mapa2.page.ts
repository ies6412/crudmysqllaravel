import { GooglemapsService } from './../../servicio/googlemaps.service';
import { Component, OnInit, Renderer2, ViewChild, ElementRef, Inject, Injectable } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import {Plugins} from '@capacitor/core';




const {Capacitor}=Plugins
const {Geolocation}=Plugins
declare var google

@Component({
  selector: 'app-mapa2',
  templateUrl: './mapa2.page.html',
  styleUrls: ['./mapa2.page.scss'],
})
export class Mapa2Page implements OnInit {

  position={
    lat :-2.891167,
    lng: -78.9945345545
  }
  label={
    titulo:'cualquiera'
  }

 
  map=null
  marker:any;
  infowindow:any;
  positionset:any;

  @ViewChild('map')divmap:ElementRef



  constructor(private googleservice:GooglemapsService,
              @Inject (DOCUMENT) private document,
              private renderer:Renderer2,

              ) { }

  ngOnInit() {
    this.init()
  }
     async init(){
       console.log('al servicio')
       this.googleservice.init(this.document,this.renderer).then(()=>{
          console.log('aqui')
    this.initMap();
     }).catch((err)=>{console.log(err)})



    }

  
  
    initMap() {
     
      const position=this.position;
      
       let latLng = new google.maps.LatLng(position.lat, position.lng);
      
      let mapOptions = {
        center: latLng,
        zoom: 15,
        disableDefaultUI:true,
        clickableIcons:false
        
    };
    // const mapEle: HTMLElement = document.getElementById('map');
    
    
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement,mapOptions);
    this.marker=new google.maps.Marker({
      map:this.map,
      animation:google.maps.Animation.DROP,
      draggable:false
    })
     this.clichandevent()
     this.addMarker(position);
   this.infowindow=new google.maps.InfoWindow()
     
    // if(this.label.titulo.length){
          this.setinfowindow(this.marker,this.label.titulo)
    // }

     
  }

  addMarker(position:any) {
    console.log('postionan add->Z',position)

    let latLng = new google.maps.LatLng(position.lat,position.lng);
    this.marker.setPosition(latLng);
    this.map.panTo(position);
     this.positionset=position

}
 setinfowindow(marker:any,titulo:string){

  const informacion='<div id="contentinsidemap">'+'<div></div>'+
                     '<p style="font-weight:bold;margin-bottom:5px;">adsd'+titulo+'</p>'+
                     '<div id="bodycontent">'+
                     '<p class"normal m-0">'+'otra cosa cualquiera'+
                     '</p></div>'+
                     '</div>'
   this.infowindow.setContent(informacion);
   this.infowindow.open(this.map,marker)


 }
 clichandevent(){
   console.log('click funcion')

  this.map.addListener('click',(event:any)=>{
    console.log('sadsads')
    const positiones={
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    }
    

    this.addMarker(positiones)
  })

 }


 async miubicacion(){

  console.log('click')

  Geolocation.getCurrentPosition().then((position_res) => {

    const position={
      lat:position_res.coords.latitude,
      long:position_res.coords.longitude
    }
    this.addMarker(position);

  })
 }


}
