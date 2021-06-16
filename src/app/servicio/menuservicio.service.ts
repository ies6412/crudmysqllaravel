import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from  './../interface/menu';




@Injectable({
  providedIn: 'root'
})
export class MenuservicioService {

  url='./../../assets/data/menu.json'

  constructor(private http:HttpClient) { }

 vermenu(): Observable<Menu[]>{

    return   this.http.get<Menu[]>(this.url)
  }
}
