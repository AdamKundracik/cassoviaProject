import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from '../../../../shared/services/city.service';
import { City } from '../../../../shared/models/city.model';
import { cities } from '../../constants/cities.constants';
import { WeatherService } from '../../../../shared/services/weather.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  constructor(
    private cityService: CityService,
    private router: Router,
    private weatherService: WeatherService
  ) {}

  keyword = 'name';
  cities = cities;
  ngOnInit(): void {
    cities.forEach((city) => {
      this.dataForCity(city);
    });
  }

  selectEvent(item: City): void {
    console.log(item.name);
    this.cityService.setCity(item.name);
    this.router.navigate(['/', 'today', 'weather']);
  }

  dataForCity(city: City) {
    this.weatherService.getWeatherNow(city.id).subscribe({
      next: (response) => {
        city.value = response?.main?.temp;
        city = { ...city };
      },
    });
  }
}
