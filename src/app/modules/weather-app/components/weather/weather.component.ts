import {Component, Input, OnInit} from '@angular/core';
import {List, WeatherDataToday} from "../../../../shared/models/weather-data-today.model";
import {WeatherDataNow} from "../../../../shared/models/weather-data-now.model";
import {Weather} from "../../../../shared/models/main-weather.model";
import {Temp} from "../../../../shared/models/daily.model";
import {ItemType} from "../weather-item/weather-item.component";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherItemTypes = ItemType

  @Input()
  weatherDataToday?: List;

  @Input()
  weatherDataNow?: WeatherDataNow;

  @Input()
  weather?: Weather;

  @Input()
  temp?: Temp

  constructor() { }

  ngOnInit(): void {
  }

}
