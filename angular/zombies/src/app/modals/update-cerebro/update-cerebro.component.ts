import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-cerebro',
  templateUrl: './update-cerebro.component.html',
  styles: []
})
export class UpdateCerebroComponent implements OnInit {
  @ViewChild('modal') public modal: ElementRef;
  @ViewChild('closebutton') closebutton;
  @ViewChild('error') public error2: ElementRef;
  sabor: string;
  descripcion: string;
  iq: any;
  imagen: string;
  error: string;
  clase: string;

  // tslint:disable-next-line: variable-name
  constructor(public dataService: DataService, private _renderer: Renderer2) { }

  ngOnInit(): void {
  }

  actualizarCerebros(form: NgForm) {
    this.dataService.actualizarCerebro(this.sabor, this.descripcion, this.iq, this.imagen,
    this.dataService.logedUser.email, this.dataService.cerebro[0]).subscribe((resultado) => {
      this.dataService.obtenerCerebros();
      this.clase = '';
      this.error = '';
      this.closebutton.nativeElement.click();
      form.resetForm();
    }, (error) => {
      this.clase = error.error.clase;
      this.error = error.error.mensaje;
    });
  }
}
