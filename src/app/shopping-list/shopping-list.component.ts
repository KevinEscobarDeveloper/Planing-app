import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {

  ingridients: Ingredient[] = [
    {
      name: 'apple',
      amount: 6
    },
    {
      name: 'apple',
      amount: 6
    },
  ];

  onIngredientAdded(ingredient: Ingredient) {

    this.ingridients.push(ingredient);
  }
}
