import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let CerebrosmodalsComponent = class CerebrosmodalsComponent {
    // tslint:disable-next-line: variable-name
    constructor(dataService, _renderer) {
        this.dataService = dataService;
        this._renderer = _renderer;
    }
    ngOnInit() {
    }
    /*  guardarCerebros() {
        this.dataService.agregarCerebro(this.sabor, this.descripcion, this.iq, this.imagen).subscribe((resultado) => {
          console.log(resultado);
          this._renderer.selectRootElement(this.modal.nativeElement).click();
          this.dataService.obtenerCerebros();
        }, (error) => {
          this.error = error.error.tError;
        });
      }*/
    guardarCerebros() {
        console.log(this.sabor, this.descripcion, this.iq, this.imagen);
        this.dataService.agregarCerebro(this.sabor, this.descripcion, this.iq, this.imagen).subscribe((resultado) => {
            console.log(resultado);
            this.dataService.obtenerCerebros();
        });
    }
};
__decorate([
    ViewChild('modal')
], CerebrosmodalsComponent.prototype, "modal", void 0);
__decorate([
    ViewChild('error')
], CerebrosmodalsComponent.prototype, "error2", void 0);
CerebrosmodalsComponent = __decorate([
    Component({
        selector: 'app-cerebrosmodals',
        templateUrl: './cerebrosmodals.component.html',
        styles: []
    })
], CerebrosmodalsComponent);
export { CerebrosmodalsComponent };
//# sourceMappingURL=cerebrosmodals.component.js.map