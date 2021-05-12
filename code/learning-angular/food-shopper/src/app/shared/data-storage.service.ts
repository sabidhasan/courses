import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private url: string;

  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private router: ActivatedRoute) {
    this.url = 'http://localhost:3000/recipes'
  }

  storeRecipe() {
    const recipes = this.recipeService.getRecipes();
    this.httpClient
      .put(this.url, recipes)
      .subscribe((data) => console.log(data));
  }

  fetchRecipes() {
    console.log('running fetch')
    return this.httpClient
      .get<Recipe[]>(this.url)
      .pipe(
        map((recipes) => recipes.map(r => ({ ...r, ingredients: r.ingredients ?? [] } as Recipe) )),
        tap((recipes) => (this.recipeService.setRecipes(recipes)))
      );
  }
}
