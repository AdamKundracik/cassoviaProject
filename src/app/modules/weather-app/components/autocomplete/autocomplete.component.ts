import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CityService} from "../../../../shared/services/city.service";
import {City} from "../../../../shared/models/city.model";


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  constructor(private cityService: CityService,
              private router: Router) {
  }

  keyword = 'name';
  data = [
    {
      id: 1,
      name: 'Bratislava'
    },
    {
      id: 2,
      name: 'Humenné'
    },
    {
      id: 3,
      name: 'Koromľa'
    },
    {
      id: 4,
      name: 'Košice'
    },
    {
      id: 5,
      name: 'Michalovce'
    },
    {
      id: 6,
      name: 'Sobrance'
    }
  ];

  ngOnInit(): void {
  }

  public selectEvent(item: City) {
    console.log(item.name)
    this.cityService.setCity(item.name)
    this.router.navigate(['/','today','weather'])
  }





}
