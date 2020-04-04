import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-zombies',
  templateUrl: './zombiesmodals.component.html',
  styles: []
})
export class ZombiesModalsComponent implements OnInit {
  @ViewChild('modal') public modal: ElementRef;
  @ViewChild('closebutton') closebutton;
  @ViewChild('error') public error2: ElementRef;
  nombre: string;
  email: string;
  tipo: string;
  zombies: any;
  error: string;
  clase: string;

  // tslint:disable-next-line: variable-name
  constructor(private dataService: DataService, private _renderer: Renderer2) { }

  ngOnInit(): void {
  }

  guardarZombies(form: NgForm) {
    this.dataService.agregarZombie(this.nombre, this.email, this.tipo, this.dataService.logedUser.email).subscribe((resultado) => {
      this.dataService.obtenerZombies();
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
