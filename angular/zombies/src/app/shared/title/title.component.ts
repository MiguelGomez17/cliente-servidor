import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(private dataService: DataService) {
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

  ngOnInit(): void {
  }

}
