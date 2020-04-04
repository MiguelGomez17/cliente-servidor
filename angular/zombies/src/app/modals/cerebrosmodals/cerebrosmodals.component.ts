import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cerebrosmodals',
  templateUrl: './cerebrosmodals.component.html',
  styles: []
})
export class CerebrosmodalsComponent implements OnInit {
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
  constructor(private dataService: DataService, private _renderer: Renderer2) { }

  ngOnInit(): void {
  }

  guardarCerebros(form: NgForm) {
    console.log(this.sabor, this.descripcion, this.iq, this.imagen);
    this.dataService.agregarCerebro(this.sabor, this.descripcion, this.iq, this.imagen,
    this.dataService.logedUser.email).subscribe((resultado) => {
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
