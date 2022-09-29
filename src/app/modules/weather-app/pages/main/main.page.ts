import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UrlService } from '../../../../shared/services/url.service';

@Component({
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  url = '';
  height = '0%';
  sub: Subscription = Subscription.EMPTY;

  constructor(private urlService: UrlService, private router: Router) {}

  ngOnInit(): void {
    this.routerHandler();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private routerHandler(): void {
    this.sub = this.urlService.getUrl().subscribe({
      next: (url: string) => {
        this.height = url === '/today/weather' ? '60%' : '90%';
      },
    });
  }
}
