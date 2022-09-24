import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CityService {

  private readonly API_URL = API_URL

  public city: string = "Kosice"

  constructor() {
  }

  public getCity() {
    return this.city;
  }

  public setCity(city: string) {
    this.city = city;
  }
}
