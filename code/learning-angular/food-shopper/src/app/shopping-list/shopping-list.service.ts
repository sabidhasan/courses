import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  public ingredientAdded = new EventEmitter<Ingredient[]>();

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
    this.ingredientAdded.emit(this.getIngredients());
  }
}
