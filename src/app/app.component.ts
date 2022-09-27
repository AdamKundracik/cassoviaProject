import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {filter, Subscription} from "rxjs";
import {LocationStrategy} from "@angular/common";
import {NavigationEnd, Router} from "@angular/router";
import {UrlService} from "./shared/services/url.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cassoviaProject';


  sub: Subscription = Subscription.EMPTY;

  constructor(private url: LocationStrategy, private cd: ChangeDetectorRef, private router: Router, private urlService: UrlService) {
  }

  ngOnInit(): void {
    console.log("A")
    this.routerHandler();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private routerHandler(): void {
    this.sub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe({
      next: (event: any) => {
        if(event.url === "/today/weather") {
          this.urlService.setUrl(event.url);
        } else {
          this.urlService.setUrl(event.url);
        }
      }
    })
  }



}
