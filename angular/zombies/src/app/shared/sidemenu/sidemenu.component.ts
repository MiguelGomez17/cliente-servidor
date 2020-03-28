import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(private dataService: DataService) { }
  logeado = this.dataService.logeado;

  ngOnInit(): void {
    this.logeado = this.dataService.logeado;
  }

}
