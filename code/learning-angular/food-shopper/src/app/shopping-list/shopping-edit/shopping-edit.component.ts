import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  public nameValue: string;
  public amountValue: number = 1;
  @Output() onIngredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    if (!this.nameValue || !this.amountValue) {
      return;
    }
    const ingredient = new Ingredient(this.nameValue, this.amountValue);
    this.onIngredientAdded.emit(ingredient);
    // Clear the form
    this.nameValue = '';
    this.amountValue = 1;
  }
}
