import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipes/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent {

  @Input() recipe!: Recipe;

}
