import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let ZombiesModalsComponent = class ZombiesModalsComponent {
    // tslint:disable-next-line: variable-name
    constructor(dataService, _renderer) {
        this.dataService = dataService;
        this._renderer = _renderer;
    }
    ngOnInit() {
    }
    guardarZombies() {
        this.dataService.agregarZombie(this.nombre, this.email, this.tipo).subscribe((resultado) => {
            console.log(resultado);
            this._renderer.selectRootElement(this.modal.nativeElement).click();
            this.dataService.obtenerZombies();
        }, (error) => {
            console.log(error);
        });
    }
};
__decorate([
    ViewChild('modal')
], ZombiesModalsComponent.prototype, "modal", void 0);
__decorate([
    ViewChild('error')
], ZombiesModalsComponent.prototype, "error2", void 0);
ZombiesModalsComponent = __decorate([
    Component({
        selector: 'app-modal-zombies',
        templateUrl: './zombiesmodals.component.html',
        styles: []
    })
], ZombiesModalsComponent);
export { ZombiesModalsComponent };
//# sourceMappingURL=zombiesmodals.component.js.map