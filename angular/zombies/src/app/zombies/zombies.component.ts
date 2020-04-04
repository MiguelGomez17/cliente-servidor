import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-zombies',
  templateUrl: './zombies.component.html',
  styleUrls: ['./zombies.component.css']
})
export class ZombiesComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(public _dataService: DataService) {
    this.actualizarTabla();
    if (localStorage.getItem('resultado')) {
      this._dataService.logeado = true;
    } else {
      location.replace('/#/login');
    }
  }

  zombies: any;
  logeado = this._dataService.logeado;
  public zombie: any;

  ngOnInit(): void {}

  eliminar(id) {
    this._dataService.eliminarZombie(id).subscribe((resultado) => {
      this.actualizarTabla();
    });
  }

  actualizar(id, name, email, usuario) {
    var data = [id, name, email, usuario];
    this._dataService.zombie = data;
  }

  actualizarTabla() {
    console.log('Actualizando tabla...');
    this._dataService.zombiesObservable.subscribe((resultado) => {
      this.zombies = resultado;
    });
    this._dataService.obtenerZombies();
  }

  usuariovalido(zombie) {
    if (zombie.usuario == this._dataService.logedUser.email) {
      return true;
    } else if (this._dataService.logedUser.type == 'Administrador') {
      return true;
    } else {
      return false;
    }
  }

}
