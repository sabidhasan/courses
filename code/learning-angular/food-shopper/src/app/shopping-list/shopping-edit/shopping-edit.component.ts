import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  public nameValue: string;
  public amountValue: number = 1;

  constructor(private shoppingListService: ShoppingListService) { }

  onAddItem() {
    if (!this.nameValue || !this.amountValue) {
      return;
    }
    const ingredient = new Ingredient(this.nameValue, this.amountValue);
    this.shoppingListService.addIngredient(ingredient);
    // Clear the form
    this.nameValue = '';
    this.amountValue = 1;
  }
}
