import { Component, EventEmitter, Output } from '@angular/core';
import { TRoute } from '../shared/type';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    @Output('onRouteChange') onRouteChange = new EventEmitter<TRoute>();
    public currentRoute: TRoute = TRoute.SHOPPING_LIST;

    getRouteName() {
        return this.currentRoute === TRoute.RECIPES ? 'Recipes' : 'Shopping List'
    }

    handleChange(routeName: string) {
        this.currentRoute = routeName === 'recipes' ? TRoute.RECIPES : TRoute.SHOPPING_LIST;
        this.onRouteChange.emit(this.currentRoute);
    }
}