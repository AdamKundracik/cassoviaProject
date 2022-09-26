import {Component, Input, OnInit} from '@angular/core';
import {WeatherDataToday} from "../../../../shared/models/weather-data-today.model";
import {WeatherDataNow} from "../../../../shared/models/weather-data-now.model";
import {Weather} from "../../../../shared/models/main-weather.model";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input()
  public weatherDataToday?: WeatherDataToday;

  @Input()
  public weatherDataNow?: WeatherDataNow;

  @Input()
  public weather?: Weather;

  constructor() { }

  ngOnInit(): void {
  }

}
