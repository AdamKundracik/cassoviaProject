import {Component, Input, OnInit} from '@angular/core';
import {WeatherDataNow} from "../../../../shared/models/weather-data-now.model";

export enum ItemType {
  Humidity = "Humidity",
  Pressure = "Pressure",
  Wind = "Wind",
  Sunset = "Sunset",
  Sunrise = "Sunrise",
  Daytime = "Daytime"
}

export interface DateLength {
  sunset: number;
  sunrise: number;
}

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {

  weatherItemTypes = ItemType;

  @Input()
  data: any;

  @Input()
  type: ItemType = ItemType.Humidity;

  constructor() { }

  ngOnInit(): void {
  }

}
