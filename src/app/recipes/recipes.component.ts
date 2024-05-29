import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipes/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {
  isLoading = false;
  selectedRecipe!: Recipe;

}


