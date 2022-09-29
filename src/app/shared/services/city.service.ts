import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CityService {
  city = 'Košice';

  constructor() {}

  public setCity(city: string): void {
    this.city = city;
  }
}
