import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-zombies',
  templateUrl: './zombies.component.html',
  styleUrls: ['./zombies.component.css']
})
export class ZombiesComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _dataService: DataService) { }

  zombies: any;
  logeado = this._dataService.logeado;

  ngOnInit(): void {
    if(localStorage.getItem('resultado')){
      this._dataService.logeado = true;
      this.actualizarTabla();
    }else{
      location.replace('/#/login');
    }
  }
  eliminar(id) {
    this._dataService.eliminarZombie(id).subscribe((resultado) => {
      this.actualizarTabla();
    });
  }

  actualizar(id, name, email) {
    var data = [id, name, email];
    localStorage.setItem('Zombiedata', JSON.stringify(data));
    this._dataService.id = id;
    this._dataService.name = name;
    this._dataService.email = email;
    console.log(this._dataService.id, this._dataService.name = name, this._dataService.email = email);
  }

  actualizarTabla() {
    console.log('Actualizando tabla...');
    this._dataService.zombiesObservable.subscribe((resultado) => {
      this.zombies = resultado;
    });
    this._dataService.obtenerZombies();
  }
}
