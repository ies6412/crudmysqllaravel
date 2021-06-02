import { ModalController } from '@ionic/angular';
import { Crudmysql } from './../../interface/crudmysql';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cabceras',
  templateUrl: './cabceras.component.html',
  styleUrls: ['./cabceras.component.scss'],
})
export class CabcerasComponent implements OnInit {
  @Input() titulo:string='';
  constructor(private modalcerrar:ModalController) { }

  ngOnInit() {}
  cerrarmodal(){
    this.modalcerrar.dismiss()
  }
}
