import {Component, Input, OnInit} from '@angular/core';
import {WeatherDataToday} from "../../../../shared/models/weather-data-today.model";
import {WeatherDataNow} from "../../../../shared/models/weather-data-now.model";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input()
  public weatherDataToday?: WeatherDataToday

  @Input()
  public weatherDataNow?: WeatherDataNow

  constructor() { }

  ngOnInit(): void {
  }

}
