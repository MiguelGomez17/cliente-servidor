import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dataService: DataService) { }
  nombre: string;
  useremail: string;
  contrasena: string;
  concontrasena: any;
  tipo: string;
  picture: string;
  error: string;
  clase: string;

  ngOnInit(): void {
    if (this.dataService.logeado) {
      location.replace('/#');
    }
  }
  registrar() {
    if (this.concontrasena === this.contrasena) {
      this.dataService.registrarUsuario(this.nombre, this.useremail, this.contrasena, this.tipo, this.picture).subscribe((resultado) => {
        this.clase = 'alert alert-success';
        this.error = 'Usuario registrado';
        location.replace('/#/login');
      }, (error) => {
        this.clase = error.error.clase;
        this.error = error.error.mensaje;
      });
    } else {
      this.clase = 'alert alert-danger';
      this.error = 'Error: Las contraseñas no coinciden';
    }
  }
}
