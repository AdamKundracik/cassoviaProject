import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './pages/main/main.page';
import { ContentPage } from './pages/content/content.page';
import { SearchPage } from './pages/search/search.page';

const routes: Routes = [
  {
    path: 'today',
    component: MainPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'weather',
      },
      {
        path: 'weather',
        component: ContentPage,
      },
      {
        path: 'search',
        component: SearchPage,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/today/weather',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/today/weather',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class WeatherRoutingModule {}
