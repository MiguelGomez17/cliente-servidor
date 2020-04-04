import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _dataService: DataService) {
    this.obtenercerebros();
    if (localStorage.getItem('resultado')) {
      this._dataService.Usuario().subscribe(data => {
        this.logeado = true;
      },
      error => {
        this.logeado = false;
        localStorage.removeItem('resultado');
        alert('Tu sesion caducó');
        location.reload();
      }
    );
    } else {
      location.replace('/#/login');
    }
  }
  logeado: any;
  cerebros: any;
  sabores = [];
  usuarios = [];
  valSabor = [];
  valUsuario = [];

  ngOnInit(): void {}

  obtenercerebros() {
    this._dataService.cerebrosObservable.subscribe((resultado) => {
      this.cerebros = resultado;
    });
    this._dataService.obtenerCerebros();
  }
  registro(valor) {
    let existe = false;
    let indice;
    for (let i = 0; i < this.sabores.length; i++) {
      if (this.sabores[i][0] == valor.flavor) {
        existe = true;
        indice = i;
        i = this.sabores.length + 1;
      }
    }
    if (!existe) {
      this.sabores.push([valor.flavor, valor.usuario, 1]);
    } else {
      this.sabores[indice][2] = this.sabores[indice][2] + 1;
    }
    existe = false;
    indice = 0;
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i][1] == valor.usuario) {
        existe = true;
        indice = i;
        i = this.usuarios.length + 1;
      }
    }
    if (!existe) {
      this.usuarios.push([valor.flavor, valor.usuario, 1]);
    } else {
      this.usuarios[indice][2] = this.usuarios[indice][2] + 1;
    }
  }
  porcentajesabor(elemento) {
    let total = 0;
    // tslint:disable-next-line: forin
    for (const i in this.sabores) {
      total += this.sabores[i][2];
    }
    // tslint:disable-next-line: forin
    for (const i in this.sabores) {
      if (this.sabores[i][0] == elemento) {
        const porcentaje = (((this.sabores[i][2] * 100) / total) + '%');
        return porcentaje;
      }
    }
  }
  porcentajeusuario(elemento) {
    let total = 0;
    // tslint:disable-next-line: forin
    for (const i in this.usuarios) {
      total += this.usuarios[i][2];
    }
    // tslint:disable-next-line: forin
    for (const i in this.usuarios) {
      if (this.usuarios[i][1] == elemento) {
        const porcentaje = (((this.usuarios[i][2] * 100) / total) + '%');
        return porcentaje;
      }
    }
  }
}
