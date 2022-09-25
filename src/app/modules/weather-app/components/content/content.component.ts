import {Component, OnDestroy, OnInit} from '@angular/core';
import { CityService } from "../../../../shared/services/city.service";
import { WeatherService } from "../../../../shared/services/weather.service";
import {forkJoin, Subscription, throwError} from "rxjs";
import { WeatherDataNow } from "../../../../shared/models/weather-data-now.model";
import { WeatherDataToday } from "../../../../shared/models/weather-data-today.model";
import { DailyWeather } from "../../../../shared/models/daily.model";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit, OnDestroy {

  weatherData3Days?: DailyWeather
  weatherDataNow?: WeatherDataNow;
  weatherDataToday?: WeatherDataToday;
  city = "";
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
          this.weatherDataToday = weatherDataToday;
          this.weatherDataNow = weatherDataNow;
          this.weatherData3Days = weatherData3Days;
        },
        error: (error: unknown) => {
          console.log(error as Error)
        }
      })
    )


  }
}
