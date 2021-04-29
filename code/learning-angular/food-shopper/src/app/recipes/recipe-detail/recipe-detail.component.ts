import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private currentRoute: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    const recipeId = +this.currentRoute.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipes()[recipeId];

    this.currentRoute.params.subscribe((params) => {
      this.recipe = this.recipeService.getRecipes()[+params['id']];
    })
  }

  handleAddToShoppingList() {
    this.recipe.ingredients.forEach((ing) => this.shoppingListService.addIngredient(ing));
  }
}
