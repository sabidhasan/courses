import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  handleNewClick() {
    this.router.navigate(['new'], { relativeTo: this.activeRoute })
  }
}
