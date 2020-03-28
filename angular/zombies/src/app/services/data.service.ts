import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private updateZombies$ = new Subject<any>();
  zombiesObservable = this.updateZombies$.asObservable();

  private updateCerebros$ = new Subject<any>();
  cerebrosObservable = this.updateCerebros$.asObservable();
  id: any;
  name: any;
  email: any;
  flavor: any;
  iq: any;
  description: any;
  picture: any;
  logeado: boolean;
  logedUser: any;

  // tslint:disable-next-line: variable-name
  constructor(private _client: HttpClient) { }

  async obtenerZombies() {
    const zombies = await this._client.get<any>(apiUrl + 'zombies');
    return this.updateZombies$.next(zombies);
  }

  agregarZombie(nombre: string, email: string, tipo: string) {
    const nuevoZombie = {
      name: nombre,
      email,
      type: tipo
    };

    return this._client.post(apiUrl + 'zombies/nuevo', nuevoZombie);
  }
  actualizarZombie(nombre: string, email: string, tipo: string, id: string) {
    const Zombie = {
      name: nombre,
      email,
      type: tipo
    };
    return this._client.put(`${apiUrl}zombies/edit/${id}`, Zombie);
  }

  eliminarZombie(id) {
    return this._client.delete(`${apiUrl}zombies/delete/${id}`);
  }

  async obtenerCerebros() {
    const cerebros = await this._client.get<any>(apiUrl + 'cerebros');
    return this.updateCerebros$.next(cerebros);
  }

  agregarCerebro(sabor: string, descripcion: string, iq: string, imagen: string) {
    const nuevoCerebro = {
      flavor: sabor,
      description: descripcion,
      iq,
      picture: imagen
    };
    return this._client.post(apiUrl + 'cerebros/nuevo', nuevoCerebro);
  }

  actualizarCerebro(sabor: string, descripcion: string, iq: any, imagen: string, id: any) {
    const Cerebro = {
      flavor: sabor,
      description: descripcion,
      iq,
      picture: imagen
    };
    return this._client.put(`${apiUrl}cerebros/edit/${id}`, Cerebro);
  }

  eliminarCerebro(id) {
    return this._client.delete(`${apiUrl}cerebros/delete/${id}`);
  }

  registrarUsuario(nombre, email, contraseña, tipo, imagen) {
    const nuevoUser = {
      name: nombre,
      email,
      password: contraseña,
      type: tipo,
      picture: imagen
    };
    return this._client.post(apiUrl + 'usuarios/nuevo', nuevoUser);
  }

  login(email, contraseña) {
    const usuario = {
      email,
      password: contraseña
    };
    return this._client.post(apiUrl + 'usuarios/login', usuario);
  }
}
