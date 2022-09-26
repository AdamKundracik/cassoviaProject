import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {slideInAnimation} from "../../../../animations";
import {LocationStrategy} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  height = "0%";


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
