import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  constructor(public _ajustes: SettingsService) { }

  ngOnInit(): void {
    this._ajustes.cargarAjustes();
  }

  seleccionarHeader(event) {
    console.log(event.target.dataset.class);
    // this.CambiarColor(event.target.dataset.class, event);
    this._ajustes.ajustes.temaEncabezado = event.target.dataset.class;
    this._ajustes.guardarAjustes();
  }

  seleccionarSide(event) {
    console.log(event.target.dataset.class);
    // this.CambiarColor(event.target.dataset.class, event);
    this._ajustes.ajustes.temaLateral = event.target.dataset.class;
    this._ajustes.guardarAjustes();
  }
/*
  CambiarColor(colorEncabezado: string, colorLateral) {
    this._ajustes.ajustes.temaEncabezado = colorEncabezado;
    this._ajustes.ajustes.temaLateral = colorLateral;
    this._ajustes.guardarAjustes();
  }*/


}
