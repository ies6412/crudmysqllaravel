import { Component } from '@angular/core';
import { Menu } from './interface/menu';
import { MenuservicioService } from './servicio/menuservicio.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  menus:Menu[]=[];
  constructor(private menu:MenuservicioService) {
  
 
    this.menu.vermenu().subscribe(menuda=>{
      this.menus=menuda
      })
  }

  
  
}
