import { Component, OnInit} from '@angular/core';
import {CityService} from "../../../../../shared/services/city.service";
import {WeatherService} from "../../../../../shared/services/weather.service";
import { throwError} from "rxjs";
import {WeatherDataNow} from "../../../../../shared/models/weatherDataNow.model";
import {WeatherDataToday} from "../../../../../shared/models/weatherDataToday.model";
import {DailyWeather} from "../../../../../shared/models/daily.model";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {

  public weatherData3Days?: DailyWeather

  public weatherDataNow?: WeatherDataNow;

  public weatherDataToday?: WeatherDataToday;

  public city: string = "Košice"

  constructor(private cityService: CityService, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.city = this.cityService.getCity();
    this.getData(this.city);
  }

  public getData(city: string): void {
    this.weatherService.getWeatherToday(city).subscribe({
      next: (response) => {
        this.weatherDataToday = response;
      },
      error: (err => {
        throwError(err);
      }),
    })
    this.weatherService.getWeatherNow(city).subscribe({
      next: (response) => {
        // this.toastr.success("Počasie bolo úspešne načítané")
        this.weatherDataNow = response;
      }
    })
    this.weatherService.getWeather3Days(this.city).subscribe({
      next: (response) => {
        this.weatherData3Days = response;
      }
    })
  }


}
