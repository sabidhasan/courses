import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  constructor() {
    this.recipes.push(new Recipe(0, 'Test 1', 'Cool recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636', [new Ingredient('Flour', 2), new Ingredient('Sugar', 3)]))
    this.recipes.push(new Recipe(1, 'Test 2', 'Cool 2recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636', [new Ingredient('Potatoes', 2), new Ingredient('Beef', 3)]))
  }

  getRecipes() {
    return this.recipes.slice();
  }

  updateRecipe(recipe: Recipe) {
    const idx = this.recipes.findIndex(r => r.id === recipe.id);
    this.recipes[idx] = recipe;
    this.recipesChanged.next(this.getRecipes())
  }

  createRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes())
  }

  deleteRecipe(recipe: Recipe) {
    const index = this.recipes.findIndex((r) => r.id === recipe.id);
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.getRecipes());
  }
}
