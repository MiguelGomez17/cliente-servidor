import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cerebros',
  templateUrl: './cerebros.component.html',
  styleUrls: ['./cerebros.component.css']
})
export class CerebrosComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(public _dataService: DataService) {
    this.actualizarTabla();
    if (localStorage.getItem('resultado')) {
      this._dataService.logeado = true;
    } else {
      location.replace('/#/login');
    }
  }

  cerebros: any;
  logeado = this._dataService.logeado;

  ngOnInit(): void { }
  eliminar(id) {
    this._dataService.eliminarCerebro(id).subscribe((resultado) => {
      this.actualizarTabla();
    });
  }

  actualizar(id, flavor, iq, description, picture, usuario) {
    let data = [id, flavor, iq, description, picture, usuario];
    this._dataService.cerebro = data;
  }

  actualizarTabla() {
    console.log('Actualizando tabla...');
    this._dataService.cerebrosObservable.subscribe((resultado) => {
      this.cerebros = resultado;
    });
    this._dataService.obtenerCerebros();
  }

  usuariovalido(cerebro) {
    if (cerebro.usuario == this._dataService.logedUser.email) {
      return true;
    } else if (this._dataService.logedUser.type == 'Administrador') {
      return true;
    } else {
      return false;
    }
  }
}
