import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {LocationStrategy} from "@angular/common";
import {NavigationEnd, Router} from "@angular/router";
import {filter, Subscription} from "rxjs";

@Component({
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit, OnDestroy {
  height = "0%";

  sub: Subscription = Subscription.EMPTY;

  constructor(private url: LocationStrategy, private cd: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
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
          this.height = "60%"
        } else {
          this.height = "90%"
        }
      }
    })
  }



}
