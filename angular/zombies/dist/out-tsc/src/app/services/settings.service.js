import { __decorate, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
let SettingsService = class SettingsService {
    // tslint:disable-next-line: variable-name
    constructor(_document) {
        this._document = _document;
        this.ajustes = {
            temaEncabezado: '',
            temaLateral: ''
        };
    }
    // tslint:disable-next-line: contextual-lifecycle
    ngOnInit() {
        this.cargarAjustes();
    }
    cargarAjustes() {
        if (localStorage.getItem('ajustes')) {
            this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
            console.log('Cargando ajustes...');
        }
        else {
            console.log('Se cargaron ajustes por defecto.');
        }
        this.aplicar();
    }
    guardarAjustes() {
        console.log('Guardado en localStorage');
        localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    }
    aplicar() {
        console.log('aplicando...');
        this._document.
            getElementsByClassName('app-header')[0].setAttribute('class', 'app-header header-shadow ' + this.ajustes.temaEncabezado);
        this._document.
            getElementsByClassName('app-sidebar')[0].setAttribute('class', 'app-sidebar sidebar-shadow ' + this.ajustes.temaLateral);
    }
};
SettingsService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject(DOCUMENT))
], SettingsService);
export { SettingsService };
//# sourceMappingURL=settings.service.js.map