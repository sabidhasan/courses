import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from './recipes/recipe.model';
import { DataStorageService } from './shared/data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(private dataStorageService: DataStorageService) { }

  resolve(): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    return this.dataStorageService.fetchRecipes();
  }
}
