import { Component } from '@angular/core';
import { TRoute } from './shared/type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-shopper';
  public showAppRecipes = true;

  updateCurrentRoute(route: TRoute) {
    this.showAppRecipes = route === TRoute.RECIPES;
  }
}
