import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {LocationStrategy} from "@angular/common";
import {slideInAnimation} from "../../../../animations";
import {WeatherService} from "../../../../shared/services/weather.service";
import {CityService} from "../../../../shared/services/city.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],

})
export class MainComponent implements OnInit {
  height: string = "0%";


  constructor(private url: LocationStrategy, private cd: ChangeDetectorRef, private router: Router) {
    this.router.events.subscribe({
      next: (event: any) => {
        if(event.url === "/today/weather") {
          this.height = "60%"
        } else {
          this.height = "90%"
        }
      }

    })
  }

  ngOnInit(): void {

  }


}
