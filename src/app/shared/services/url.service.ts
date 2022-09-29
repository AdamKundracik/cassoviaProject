import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  private url = new BehaviorSubject<string>('');
  sub: Subscription = Subscription.EMPTY;

  constructor(private router: Router) {
    this.routerHandler();
  }

  getUrl(): Observable<string> {
    return this.url;
  }

  setUrl(url: string): void {
    this.url.next(url);
  }

  private routerHandler(): void {
    this.sub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe({
        next: (event: any) => {
          this.setUrl(event.url);
        },
      });
  }
}
