import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(private dataService: DataService) { }
  logeado = this.dataService.logeado;

  ngOnInit(): void {
    this.logeado = this.dataService.logeado;
  }

}
