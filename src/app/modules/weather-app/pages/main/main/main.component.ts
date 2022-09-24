import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LocationStrategy} from "@angular/common";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],

})
export class MainComponent implements OnInit {
  height: string = "0%";

  constructor( private url:LocationStrategy) { }

  ngOnInit(): void {
    // console.log(this.url.path())
    // if (this.url.path() == "/today/search") {
    //   this.height = "90%"
    // } else {
    //   this.height = "60%"
    // }

  }

}
