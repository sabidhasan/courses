import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.getRecipes());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  updateRecipe(recipe: Recipe) {
    const idx = this.recipes.findIndex(r => r.id === recipe.id);
    this.recipes[idx] = recipe;
    this.recipesChanged.next(this.getRecipes());
  }

  createRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
  }

  deleteRecipe(recipe: Recipe) {
    const index = this.recipes.findIndex((r) => r.id === recipe.id);
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.getRecipes());
  }
}
