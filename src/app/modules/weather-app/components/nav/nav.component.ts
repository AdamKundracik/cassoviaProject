import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {WeatherDataToday} from "../../../../shared/models/weatherDataToday.model";
import {WeatherDataNow} from "../../../../shared/models/weatherDataNow.model";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  today = new Date();

  @Input()
  public weatherDataToday?: WeatherDataToday;

  @Input()
  public weatherDataNow?: WeatherDataNow;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public redirectToAutocomplete() {
    this.router.navigate(['/','today', 'search'])
  }

}
