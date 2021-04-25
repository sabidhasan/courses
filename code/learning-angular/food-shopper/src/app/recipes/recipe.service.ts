import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [];
  public recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {
    this.recipes.push(new Recipe('Test 1', 'Cool recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636'))
    this.recipes.push(new Recipe('Test 2', 'Cool 2recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636'))
  }

  getRecipes() {
    return this.recipes.slice();
  }
}
