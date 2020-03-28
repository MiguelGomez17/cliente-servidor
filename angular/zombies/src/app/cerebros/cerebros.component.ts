import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cerebros',
  templateUrl: './cerebros.component.html',
  styleUrls: ['./cerebros.component.css']
})
export class CerebrosComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _dataService: DataService) { }

  cerebros: any;
  logeado = this._dataService.logeado;

  ngOnInit(): void {
    if (!this._dataService.logeado) {
      location.replace('/#/login');
    }
    if(localStorage.getItem('resultado')){
      this._dataService.logeado = true;
      this._dataService.logedUser = localStorage.getItem('data');
    }
    this.actualizarTabla();
  }
  eliminar(id) {
    this._dataService.eliminarCerebro(id).subscribe((resultado) => {
      this.actualizarTabla();
    });
  }

  actualizar(id, flavor, iq, description, picture) {
    this._dataService.id = id;
    this._dataService.flavor = flavor;
    this._dataService.iq = iq;
    this._dataService.description = description;
    this._dataService.picture = picture;
  }

  actualizarTabla() {
    console.log('Actualizando tabla...');
    this._dataService.cerebrosObservable.subscribe((resultado) => {
      this.cerebros = resultado;
    });
    this._dataService.obtenerCerebros();
  }
}
