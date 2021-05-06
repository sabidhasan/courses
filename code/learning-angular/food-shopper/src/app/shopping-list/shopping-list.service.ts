import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  public ingredientAdded = new Subject<Ingredient[]>();
  public startedEditing = new Subject<number>();

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

  public updateIngredient(ingredient: Ingredient, index: number) {
    this.ingredients[index].name = ingredient.name;
    this.ingredients[index].amount = ingredient.amount;
    this.ingredientAdded.next(this.getIngredients());
  }

  public deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next(this.getIngredients());
  }

}
