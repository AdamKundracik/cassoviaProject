import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {WeatherDataToday} from "../../../../shared/models/weather-data-today.model";
import {WeatherDataNow} from "../../../../shared/models/weather-data-now.model";
import {CityService} from "../../../../shared/services/city.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  today = new Date();
  city = "";

  constructor(private router: Router, private cityService: CityService) { }

  ngOnInit(): void {
    this.city = this.cityService.city;
  }

  public redirectToAutocomplete() {
    this.router.navigate(['/','today', 'search'])
  }

}
