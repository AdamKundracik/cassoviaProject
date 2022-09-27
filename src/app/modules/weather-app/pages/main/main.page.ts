import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {LocationStrategy} from "@angular/common";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, forkJoin, Subscription} from "rxjs";
import {UrlService} from "../../../../shared/services/url.service";
import {WeatherService} from "../../../../shared/services/weather.service";

@Component({
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  url = "";
  height = "0%"
  sub: Subscription = Subscription.EMPTY;

  constructor(private urlService: UrlService, private router: Router) {
  }

  ngOnInit(): void {
    this.routerHandler();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private routerHandler(): void {
    this.sub = this.urlService.getUrl()
    .subscribe({
      next: (url: string) => {
        this.height = url === "/today/weather" ? "60%" : "90%"
      }
    })
  }


}

