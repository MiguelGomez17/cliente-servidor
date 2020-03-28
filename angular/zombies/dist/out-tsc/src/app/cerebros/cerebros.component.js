import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CerebrosComponent = class CerebrosComponent {
    // tslint:disable-next-line: variable-name
    constructor(_dataService) {
        this._dataService = _dataService;
    }
    ngOnInit() {
        this.actualizarTabla();
    }
    eliminar(id) {
        this._dataService.eliminarCerebro(id).subscribe((resultado) => {
            this.cerebros = resultado;
        });
        this.actualizarTabla();
    }
    actualizarTabla() {
        console.log('Actualizando tabla...');
        this._dataService.cerebrosObservable.subscribe((resultado) => {
            this.cerebros = resultado;
        });
        this._dataService.obtenerCerebros();
    }
};
CerebrosComponent = __decorate([
    Component({
        selector: 'app-cerebros',
        templateUrl: './cerebros.component.html',
        styleUrls: ['./cerebros.component.css']
    })
], CerebrosComponent);
export { CerebrosComponent };
//# sourceMappingURL=cerebros.component.js.map