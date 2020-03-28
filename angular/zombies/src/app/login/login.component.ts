import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService) { }
  useremail: string;
  contrasena: string;
  clase: string;
  error: string;

  ngOnInit(): void {
    if (localStorage.getItem('resultado')) {
      location.replace('/#');
    }
  }

  ingresar() {
    this.dataService.login(this.useremail, this.contrasena).subscribe((resultado) => {
      this.clase = '';
      this.error = '';
      this.dataService.logeado = true;
      var result = [];
      // tslint:disable-next-line: forin
      for (var i in resultado) {
        result.push(i, resultado[i]);
      }
      var datos = result[3];
      var data = []
      // tslint:disable-next-line: forin
      for (var i in datos) {
        data.push(i, datos[i]);
      }
      localStorage.setItem('resultado', result[1]);
      localStorage.setItem('data', JSON.stringify(data));
      location.reload();
    }, (error) => {
      this.clase = error.error.clase;
      this.error = error.error.mensaje;
    });
  }
}
