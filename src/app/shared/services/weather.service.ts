import { Injectable } from '@angular/core';
import {WeatherDataToday} from "../models/weather-data-today.model";
import {Observable} from "rxjs";
import {WeatherDataNow} from "../models/weather-data-now.model";
import {HttpClient} from "@angular/common/http";
import {DailyWeather} from "../models/daily.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getWeatherNow(city: string): Observable<WeatherDataNow> {
    return this.http.get<WeatherDataNow>(`${this.apiUrl}/data/2.5/weather?q=${city}&appid=f6c08fe5a531f086fb001d8a5f2add62&units=metric`)
  }

  getWeatherNowByLatLong(lat: number, long: number): Observable<WeatherDataNow> {
    return this.http.get<WeatherDataNow>(`${this.apiUrl}/data/2.5/weather?lat=${lat}&lon=${long}&appid=f6c08fe5a531f086fb001d8a5f2add62&units=metric`)
  }

  getWeatherTodayByLatLong(lat: number, long: number): Observable<WeatherDataToday> {
    return this.http.get<WeatherDataToday>(`${this.apiUrl}/data/2.5/forecast/daily?lat=${lat}&lon=${long}&cnt=1&appid=f6c08fe5a531f086fb001d8a5f2add62&units=metric`)
  }

  getWeatherToday(city: string): Observable<WeatherDataToday> {
    return this.http.get<WeatherDataToday>(`${this.apiUrl}/data/2.5/forecast/daily?q=${city}&cnt=1&appid=f6c08fe5a531f086fb001d8a5f2add62&units=metric`)
  }

  getWeather3Days(city: string): Observable<DailyWeather> {
    return this.http.get<DailyWeather>(`${this.apiUrl}/data/2.5/forecast/daily?q=${city}&appid=f6c08fe5a531f086fb001d8a5f2add62&cnt=3&units=metric`)
  }

}
