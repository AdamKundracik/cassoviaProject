import {Component, Input, OnInit} from '@angular/core';
import {DailyWeather} from "../../../../shared/models/daily.model";
import {WeatherService} from "../../../../shared/services/weather.service";

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit {

  @Input()
  weatherData3Days?: DailyWeather

  constructor() { }

  ngOnInit(): void {

  }


}
