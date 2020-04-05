import { Injectable, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(@Inject(DOCUMENT) private _document) {
  }

  ajustes = {
    temaEncabezado: '',
    temaLateral: ''
  };

  // tslint:disable-next-line: contextual-lifecycle
  ngOnInit() {
    this.cargarAjustes();
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log('Cargando ajustes...');
      this.aplicar();
    } else {
      console.log('Se cargaron ajustes por defecto.');
    }
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  aplicar() {
    this._document.getElementsByClassName('app-header')[0].setAttribute('class', 'app-header header-shadow ' + this.ajustes.temaEncabezado);
    this._document.getElementsByClassName('app-sidebar')[0].setAttribute('class', 'app-sidebar sidebar-shadow ' + this.ajustes.temaLateral);
  }
}
