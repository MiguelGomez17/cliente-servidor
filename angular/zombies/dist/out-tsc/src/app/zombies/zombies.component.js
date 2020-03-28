import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ZombiesComponent = class ZombiesComponent {
    // tslint:disable-next-line: variable-name
    constructor(_dataService) {
        this._dataService = _dataService;
    }
    ngOnInit() {
        this.actualizarTabla();
    }
    eliminar(id) {
        this._dataService.eliminarZombie(id).subscribe((resultado) => {
            this.zombies = resultado;
        });
        this.actualizarTabla();
    }
    actualizarTabla() {
        console.log('Actualizando tabla...');
        this._dataService.zombiesObservable.subscribe((resultado) => {
            this.zombies = resultado;
        });
        this._dataService.obtenerZombies();
    }
};
ZombiesComponent = __decorate([
    Component({
        selector: 'app-zombies',
        templateUrl: './zombies.component.html',
        styleUrls: ['./zombies.component.css']
    })
], ZombiesComponent);
export { ZombiesComponent };
//# sourceMappingURL=zombies.component.js.map