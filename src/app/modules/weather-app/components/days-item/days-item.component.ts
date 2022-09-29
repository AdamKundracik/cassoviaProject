import {Component, Input, OnInit} from '@angular/core';
import {Weather} from "../../../../shared/models/main-weather.model";
import {List} from "../../../../shared/models/weather-data-today.model";

@Component({
  selector: 'app-days-item',
  templateUrl: './days-item.component.html',
  styleUrls: ['./days-item.component.scss']
})
export class DaysItemComponent implements OnInit {

  @Input()
  data?: Weather;

  @Input()
  dataWeather?: List


  constructor() { }

  ngOnInit(): void {
  }

}
