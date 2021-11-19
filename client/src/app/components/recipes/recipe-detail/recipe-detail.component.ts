import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
  
  //#region Event-Handlers
  public addToList(): void 
  {
    this.shoppingListService.onAddItems(this.recipe.ingredients)
  }

  //#endregion
  
  //#region Constructor
  constructor(private shoppingListService: ShoppingListService){}

 //#endregion

}
