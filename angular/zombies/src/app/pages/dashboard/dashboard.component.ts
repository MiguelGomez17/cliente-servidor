import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _dataService: DataService) {
    if(localStorage.getItem('resultado')){
      this._dataService.Usuario().subscribe(data => {
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
