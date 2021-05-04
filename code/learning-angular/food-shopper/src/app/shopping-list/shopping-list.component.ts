import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnDestroy {
  ingredients: Ingredient[];
  private shoppingListSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListSubscription = this.shoppingListService.ingredientAdded.subscribe(
      (ingredients) => this.ingredients = ingredients
    );
  }
  ngOnDestroy(): void {
    this.shoppingListSubscription.unsubscribe();
  }
}
