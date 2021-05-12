import { Routes } from "@angular/router";
import { RecipesResolverService } from "../recipes-resolver.service";
import { RecipeDetailComponent } from "../recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "../recipes/recipe-edit/recipe-edit.component";
import { RecipeLandingComponent } from "../recipes/recipe-landing/recipe-landing.component";
import { RecipesComponent } from "../recipes/recipes.component";
import { ShoppingListComponent } from "../shopping-list/shopping-list.component";

export const routes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: [
            { path: '', component: RecipeLandingComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
            { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] },
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },
];
