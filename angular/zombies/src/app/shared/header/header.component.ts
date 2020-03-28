import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService) { }
  logeado: any;
  data: any;

  ngOnInit(): void {
    if(localStorage.getItem('resultado')){
      this.dataService.logeado = true;
      this.dataService.logedUser = JSON.parse(localStorage.getItem('data'));
      this.actualizado();
    }
  }
  actualizado() {
    this.logeado = this.dataService.logeado;
    this.data = this.dataService.logedUser;
    localStorage.removeItem('data');
  }
  logout(){
    localStorage.removeItem('resultado');
    localStorage.removeItem('data');
    this.dataService.logeado = false;
    this.dataService.logedUser = null;
    location.reload();
  }
}