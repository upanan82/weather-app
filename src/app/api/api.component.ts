import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  @Input() data: Weather;

  constructor() { }

  ngOnInit() {
  }

}
