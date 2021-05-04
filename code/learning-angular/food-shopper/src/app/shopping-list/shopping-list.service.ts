import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  public ingredientAdded = new Subject<Ingredient[]>();

  constructor() {
    this.ingredients.push({ name: 'Apple', amount: 4 });
    this.ingredients.push({ name: 'Banana', amount: 2 });
  }

  public getIngredients() {
    return this.ingredients.slice();
  }

  public addIngredient(newIngredient: Ingredient) {
    const existingIngredient = this.ingredients.find((ingredient) => ingredient.name === newIngredient.name);
    if (existingIngredient) {
      existingIngredient.amount += newIngredient.amount;
    } else {
      this.ingredients.push(newIngredient);
    }
    this.ingredientAdded.next(this.getIngredients());
  }
}
