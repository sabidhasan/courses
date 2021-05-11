import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  public recipes: Recipe[] = [];
  private recipeChangeSub: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnDestroy(): void {
    this.recipeChangeSub.unsubscribe();
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeChangeSub = this.recipeService.recipesChanged.subscribe((recipes) => this.recipes = recipes);
  }

  handleNewClick() {
    this.router.navigate(['new'], { relativeTo: this.activeRoute })
  }
}
