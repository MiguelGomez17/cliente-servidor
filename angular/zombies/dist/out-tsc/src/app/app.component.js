import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.sabor = '';
        this.iq = null;
        this.descripcion = '';
        this.imagen = '';
        this.cerebros = [
            {
                sabor: 'chocolate',
                iq: 100,
                descripcion: 'Facil de partir',
                imagen: 'chocolate'
            },
            {
                sabor: 'Vainilla',
                iq: 110,
                descripcion: 'Sabe a vainilla',
                imagen: 'vainilla'
            },
            {
                sabor: 'Fresa',
                iq: 105,
                descripcion: 'Parece fresa',
                imagen: 'fresa'
            },
            {
                sabor: 'Piña',
                iq: 115,
                descripcion: 'Es piña',
                imagen: 'piña'
            }
        ];
    }
    Agregar() {
        let cerebro = {
            sabor: this.sabor,
            iq: this.iq,
            descripcion: this.descripcion,
            imagen: this.imagen
        };
        this.cerebros.push(cerebro);
    }
    Borrar(sabor) {
        this.cerebros = this.cerebros.filter(item => item.sabor !== sabor);
    }
    Actualizar(sabor) {
        let cerebro = this.cerebros.find(item => item.sabor === sabor);
        if (this.sabor !== '') {
            cerebro.sabor = this.sabor;
        }
        if (this.iq !== null) {
            cerebro.iq = this.iq;
        }
        if (this.descripcion !== '') {
            cerebro.descripcion = this.descripcion;
        }
        if (this.imagen !== '') {
            cerebro.imagen = this.imagen;
        }
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map