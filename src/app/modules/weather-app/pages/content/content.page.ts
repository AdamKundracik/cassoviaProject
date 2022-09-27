import {Component, OnDestroy, OnInit} from '@angular/core';
import {DailyWeather} from "../../../../shared/models/daily.model";
import {WeatherDataNow} from "../../../../shared/models/weather-data-now.model";
import {List, Temp, WeatherDataToday} from "../../../../shared/models/weather-data-today.model";
import {Weather} from "../../../../shared/models/main-weather.model";
import {forkJoin, Subscription} from "rxjs";
import {CityService} from "../../../../shared/services/city.service";
import {WeatherService} from "../../../../shared/services/weather.service";

@Component({
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss']
})
export class ContentPage implements OnInit, OnDestroy {

  weatherData3Days?: DailyWeather
  weatherDataNow?: WeatherDataNow;
  weatherDataToday?: List;
  temp?: Temp;
  city = "";
  mainWeather?: Weather;
  private subs = new Subscription();


  constructor(private cityService: CityService, private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.city = this.cityService.city;
    this.initContent(this.city);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  initContent(city: string): void {
    this.subs.add(
      forkJoin([this.weatherService.getWeatherToday(city), this.weatherService.getWeatherNow(city),
        this.weatherService.getWeather3Days(this.city)]
      ).subscribe({
        next: ([weatherDataToday, weatherDataNow, weatherData3Days]) => {
          this.weatherDataToday = weatherDataToday.list[0];
          this.weatherDataNow = weatherDataNow;
          this.weatherData3Days = weatherData3Days;
          this.mainWeather = weatherDataNow.weather[0];
          this.temp = weatherDataToday.list[0].temp;
        },
        error: (error: unknown) => {
          console.log(error as Error)
        }
      })
    )
  }
}
