import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    if (!this._dataService.logeado) {
      location.replace('/#/login');
    }
  }

}
