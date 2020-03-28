import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SettingsComponent = class SettingsComponent {
    // tslint:disable-next-line: variable-name
    constructor(_ajustes) {
        this._ajustes = _ajustes;
    }
    ngOnInit() {
        this._ajustes.cargarAjustes();
    }
    seleccionarHeader(event) {
        console.log(event.target.dataset.class);
        // this.CambiarColor(event.target.dataset.class, event);
        this._ajustes.ajustes.temaEncabezado = event.target.dataset.class;
        this._ajustes.guardarAjustes();
    }
    seleccionarSide(event) {
        console.log(event.target.dataset.class);
        // this.CambiarColor(event.target.dataset.class, event);
        this._ajustes.ajustes.temaLateral = event.target.dataset.class;
        this._ajustes.guardarAjustes();
    }
};
SettingsComponent = __decorate([
    Component({
        selector: 'app-settings',
        templateUrl: './settings.component.html',
        styleUrls: ['./settings.component.css']
    })
], SettingsComponent);
export { SettingsComponent };
//# sourceMappingURL=settings.component.js.map