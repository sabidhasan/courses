import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') private form: NgForm;
  private subscription: Subscription;
  private editingItemIndex: number;
  private editingItem: Ingredient;

  get isEditing() {
    return !!this.editingItem;
  }

  constructor(private shoppingListService: ShoppingListService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((i: number) => {
      // Mark editing
      this.editingItemIndex = i;
      this.editingItem = this.shoppingListService.getIngredients()[i];
      // Set values on form
      this.form.setValue({
        name: this.editingItem.name,
        amount: this.editingItem.amount,
      });
    });
  }

  onUpdateItem() {
    const { name, amount } = this.form.value;
    const ingredient = new Ingredient(name, amount);
    if (this.isEditing) {
      this.shoppingListService.updateIngredient(ingredient, this.editingItemIndex);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }

    this.clearForm();
  }

  handleDelete() {
    this.clearForm();
    this.shoppingListService.deleteIngredient(this.editingItemIndex);
  }

  clearForm() {
    this.form.resetForm();
    this.editingItem = undefined;
    this.editingItemIndex = undefined;
  }
}
