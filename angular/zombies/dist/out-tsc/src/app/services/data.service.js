import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
const apiUrl = environment.apiUrl;
let DataService = class DataService {
    constructor(_client) {
        this._client = _client;
        this.updateZombies$ = new Subject();
        this.zombiesObservable = this.updateZombies$.asObservable();
        this.updateCerebros$ = new Subject();
        this.cerebrosObservable = this.updateCerebros$.asObservable();
    }
    obtenerZombies() {
        return __awaiter(this, void 0, void 0, function* () {
            const zombies = yield this._client.get(apiUrl + 'zombies');
            return this.updateZombies$.next(zombies);
        });
    }
    agregarZombie(nombre, email, tipo) {
        const nuevoZombie = {
            name: nombre,
            email: email,
            type: tipo
        };
        return this._client.post(apiUrl + 'zombies/nuevo', nuevoZombie);
    }
    eliminarZombie(id) {
        return this._client.delete(`${apiUrl}zombies/delete/${id}`);
    }
    obtenerCerebros() {
        return __awaiter(this, void 0, void 0, function* () {
            const cerebros = yield this._client.get(apiUrl + 'cerebros');
            return this.updateCerebros$.next(cerebros);
        });
    }
    agregarCerebro(sabor, descripcion, iq, imagen) {
        const nuevoCerebro = {
            flavor: sabor,
            description: descripcion,
            iq: iq,
            picture: imagen
        };
        return this._client.post(apiUrl + 'cerebros/nuevo', nuevoCerebro);
    }
    eliminarCerebro(id) {
        return this._client.delete(`${apiUrl}cerebros/delete/${id}`);
    }
};
DataService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map