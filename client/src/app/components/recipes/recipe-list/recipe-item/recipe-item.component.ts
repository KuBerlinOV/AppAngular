import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe
   //#region Event-Handlers
   public onSelect():void {
    this.recipesService.recipeSelected.emit(this.recipe)
  }
  //#endregion

//#region Constructor
constructor(private recipesService: RecipesService) { }
//#endRegion
}
