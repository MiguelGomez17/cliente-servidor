import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService) {
    if(localStorage.getItem('resultado')){
      this.dataService.Usuario().subscribe(data => {
        let resultado = [];
        // tslint:disable-next-line: forin
        for (var i in data) {
          resultado.push(i, data[i]);
        }
        this.dataService.logeado = true;
        this.dataService.logedUser = resultado[1];
        this.logeado = this.dataService.logeado;
        this.data = this.dataService.logedUser;
      },
      error => {console.log(error)}
    );
    }
  }
  logeado: any;
  data: any;

  ngOnInit(): void {}
  
  logout(){
    localStorage.removeItem('resultado');
    this.dataService.logeado = false;
    this.dataService.logedUser = null;
    location.reload();
  }
}