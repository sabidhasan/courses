import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from './recipes/recipe.model';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) { }

  resolve(): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    const existingRecipes = this.recipeService.getRecipes();
    if (!this.recipeService.getRecipes().length) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return existingRecipes;
    }
  }
}
