import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherRoutingModule} from "./weather-routing.module";
import {MainPage} from "./pages/main/main.page";
import { ContentPage } from './pages/content/content.page';
import { NavComponent } from './components/nav/nav.component';
import { WeatherComponent } from './components/weather/weather.component';
import { DaysComponent } from './components/days/days.component';
import {RouterModule} from "@angular/router";
import { SearchPage } from './pages/search/search.page';
import { SearchComponent } from './components/search/search.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AutocompleteComponent} from "./components/autocomplete/autocomplete.component";
import {AutocompleteLibModule} from "angular-ng-autocomplete";



@NgModule({
  declarations: [
    MainPage,
    ContentPage,
    NavComponent,
    WeatherComponent,
    DaysComponent,
    SearchPage,
    SearchComponent,
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    AutocompleteLibModule

  ]
})
export class WeatherModule { }
