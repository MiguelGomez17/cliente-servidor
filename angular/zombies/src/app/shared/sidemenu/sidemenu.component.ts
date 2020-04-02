import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(public dataService: DataService) {
    if(localStorage.getItem('resultado')){
      this.dataService.Usuario().subscribe(data => {
        this.logeado = true;
      },
      error => {
        this.logeado = false;
      }
    );
    }
  }
  logeado: any;

  ngOnInit(): void {}

}
