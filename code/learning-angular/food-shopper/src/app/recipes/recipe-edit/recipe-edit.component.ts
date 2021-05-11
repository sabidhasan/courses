import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

enum EditMode {
  'EDIT',
  'CREATE'
}

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  routeId: number;
  isEditing: EditMode;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.routeId = +params['id'];
      this.isEditing = params['id'] ? EditMode.EDIT : EditMode.CREATE;
      this.initForm();
    });
  }

  private initForm() {
    const initialRecipeName = this.isEditing === EditMode.EDIT ? this.recipeService.getRecipes()[this.routeId].name : null;
    const initialImgPath = this.isEditing === EditMode.EDIT ? this.recipeService.getRecipes()[this.routeId].imagePath : null;
    const initialDescription = this.isEditing === EditMode.EDIT ? this.recipeService.getRecipes()[this.routeId].description : null;
    let initialIngredients: FormGroup[] = [];

    if (this.isEditing === EditMode.EDIT) {
      initialIngredients = this.recipeService.getRecipes()[this.routeId].ingredients.map((ing) => (
        new FormGroup({
          name: new FormControl(ing.name, Validators.required),
          amount: new FormControl(ing.amount, [Validators.pattern(/^[0-9]+$/), Validators.required]),
        })
      ));
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(initialRecipeName, Validators.required),
      imagePath: new FormControl(initialImgPath, Validators.required),
      description: new FormControl(initialDescription, Validators.required),
      ingredients: new FormArray(initialIngredients),
    });
  }

  get ingredientControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  public handleFormSubmit() {
    const recipe = new Recipe(
      this.isEditing === EditMode.CREATE ? Math.round(Math.random() * 100) : this.routeId,
      this.recipeForm.get('name').value,
      this.recipeForm.get('description').value,
      this.recipeForm.get('imagePath').value,
      this.recipeForm.get('ingredients').value,
    );

    if (this.isEditing === EditMode.CREATE) {
      this.recipeService.createRecipe(recipe);
    } else {
      this.recipeService.updateRecipe(recipe);
    }
    
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  public addNewIngredient() {
    const newControl = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.pattern(/^[0-9]+$/), Validators.required])
    });

    (this.recipeForm.get('ingredients') as FormArray).push(newControl);
  }

  public deleteIngredient(ingId: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(ingId);
  }

  public handleCancel() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }
}
