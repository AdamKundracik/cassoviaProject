import { Injectable } from '@angular/core';
import {WeatherDataToday} from "../models/weatherDataToday.model";
import {Observable} from "rxjs";
import {WeatherDataNow} from "../models/weatherDataNow.model";
import {HttpClient} from "@angular/common/http";
import { API_URL } from 'src/environments/environment';
import {DailyWeather} from "../models/daily.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly API_URL = API_URL;

  constructor(private http: HttpClient) { }

  public getWeatherNow(city: string): Observable<WeatherDataNow> {
    return this.http.get<WeatherDataNow>(`${API_URL}/data/2.5/weather?q=${city}&appid=f6c08fe5a531f086fb001d8a5f2add62&units=metric`)
  }

  public getWeatherToday(city: string): Observable<WeatherDataToday> {
    return this.http.get<WeatherDataToday>(`${API_URL}/data/2.5/forecast/daily?q=${city}&cnt=1&appid=f6c08fe5a531f086fb001d8a5f2add62&units=metric`)
  }

  public getWeather3Days(city: string): Observable<DailyWeather> {
    return this.http.get<DailyWeather>(`${this.API_URL}/data/2.5/forecast/daily?q=${city}&appid=f6c08fe5a531f086fb001d8a5f2add62&cnt=3&units=metric`)
  }
}
